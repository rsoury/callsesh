/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useState, useEffect, useCallback } from "react";
import { useStyletron, withStyle } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	H1 as Heading,
	ParagraphMedium as Paragraph,
	ParagraphLarge,
	LabelLarge as Label
} from "baseui/typography";
import isEmpty from "is-empty";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE
} from "baseui/button";
import { toaster } from "baseui/toast";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import { Avatar } from "baseui/avatar";
import ArrowRight from "baseui/icon/arrow-right";

import Highlight from "@/frontend/components/Highlight";
import Layout from "@/frontend/components/Layout";
import Link from "@/frontend/components/Link";
import useUser from "@/frontend/hooks/use-user";
import * as routes from "@/routes";
import request from "@/utils/request";
import handleException, { alerts } from "@/utils/handle-exception";
import ScreenContainer from "@/frontend/components/ScreenContainer";
import InSessionScreen from "@/frontend/screens/InSession";
import { CALL_SESSION_START_TIMEOUT, ERROR_TYPES } from "@/constants";
// import ssrUser from "@/utils/ssr-user";
// import isUserOperator from "@/utils/is-operator";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

let contactsRetrieved = false;

let startSessionTimeout = null; // instantiate outside of the component... no re-render should reinstantiate
const setSessionTimeout = (cb) => {
	startSessionTimeout = setTimeout(cb, CALL_SESSION_START_TIMEOUT);
	return startSessionTimeout;
};

const Contacts = () => {
	const [css, theme] = useStyletron();
	const [user, isUserLoading] = useUser({ required: true });
	const [isLoading, setLoading] = useState(true);
	const [contacts, setContacts] = useState([]);
	const [sessionUser, setSessionUser] = useState({});

	const handleStartSession = useCallback((contact) => {
		setSessionUser(contact);
		setSessionTimeout(() => {
			request
				.post(routes.api.contacts, {
					contact: contact.username
				})
				.then(({ data }) => data) // Will automatically start redirecting due to LiveOperator Sync
				.catch((e) => {
					const { data: err = e } = e.response || {}; // Get error body, otherwise default to returned error.
					// Check if err is common and toast/react accordingly.
					switch (err.type) {
						case ERROR_TYPES.paymentMethodRequired:
							toaster.info(
								`Your contact's payment method is required. Please inform your contact of this issue.`
							);
							break;
						case ERROR_TYPES.paymentMethodInvalid:
							toaster.info(
								`Your contact's payment method is not valid or has insufficient funds. Please inform your contact of this issue.`
							);
							break;
						case ERROR_TYPES.operatorBusy:
							toaster.negative(
								`You are already currently in a call session. Please try again later.`
							);
							break;
						case ERROR_TYPES.callSessionExists:
							toaster.warning(
								`This user is currently in a call session. Please try again later.`
							);
							break;
						case ERROR_TYPES.operatorRequired:
						case ERROR_TYPES.userBlocked:
							alerts.error();
							break;
						default:
							handleException(err);
							alerts.error();
							break;
					}
					setSessionUser({});
				});
		});
	}, []);

	const handleUndoStartSession = useCallback(() => {
		setSessionUser({});
		clearTimeout(startSessionTimeout);
	}, []);

	useEffect(() => {
		if (!isEmpty(user) && !isUserLoading) {
			if (isEmpty(user.contacts)) {
				setLoading(false);
			}
			return () => {};
		}
		if (!contactsRetrieved) {
			request
				.get(routes.api.contacts)
				.then(({ data }) => data)
				.then(({ contacts: contactsData }) => {
					setContacts(contactsData);
					setLoading(false);
				})
				.catch((e) => {
					handleException(e);
					alerts.error();
				})
				.finally(() => {
					contactsRetrieved = true;
				});
		}
		return () => {};
	}, [user, isUserLoading]);

	if (!isEmpty(sessionUser)) {
		return (
			<InSessionScreen viewUser={sessionUser} onUndo={handleUndoStartSession} />
		);
	}

	return (
		<Layout>
			<ScreenContainer id="callsesh-contacts">
				<Grid>
					<Cell span={12}>
						<Heading marginBottom="0px">Work Contacts</Heading>
						<ParagraphLarge>
							<Highlight>Start sessions</Highlight> with contacts who are
							actively working with you.
						</ParagraphLarge>
						<div>
							{isLoading ? (
								<div
									className={css({
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										padding: "40px"
									})}
								>
									<Spinner $size={SPINNER_SIZE.large} />
								</div>
							) : (
								<>
									{isEmpty(contacts) ? (
										<div
											className={css({
												backgroundColor: `rgb(248, 248, 248)`,
												borderRadius: theme.borders.radius400,
												margin: "40px auto",
												padding: "20px",
												maxWidth: "500px"
											})}
										>
											<Paragraph
												className={css({
													textAlign: "center",
													width: "100%",
													marginTop: "0px",
													marginBottom: "0px"
												})}
											>
												You do not have any contacts actively working with you.
												<br />
												Share your Call Link to your clients and instruct them
												to <Highlight noBreak>Work with you</Highlight>.
											</Paragraph>
										</div>
									) : (
										<div
											className={css({
												borderTop: `1px solid ${theme.colors.borderOpaque}`,
												borderBottom: `1px solid ${theme.colors.borderOpaque}`,
												margin: "20px 0"
											})}
										>
											{contacts.map((contact) => (
												<div
													className={css({
														display: "flex",
														alignItems: "center",
														justifyContent: "space-between",
														padding: "10px",
														borderBottom: `1px solid ${theme.colors.borderOpaque}`,
														":last-child": {
															borderBottom: "none"
														}
													})}
													key={contact.username}
												>
													<div className={css({ display: "flex" })}>
														<div
															className={css({
																marginRight: "10px",
																display: "flex"
															})}
														>
															<Avatar
																name={contact.givenName}
																size="scale800"
																src={contact.picture}
															/>
														</div>
														<Link
															href={routes.build.user(contact.username)}
															standard
															newWindow
															button
															style={{
																textUnderline: "none !important",
																transition: "opacity 0.15s",
																":hover": {
																	opacity: "0.5"
																}
															}}
														>
															<Label>
																<strong className={css({ fontWeight: "900" })}>
																	{contact.name}
																</strong>
															</Label>
														</Link>
													</div>
													<div>
														<Button
															shape={BUTTON_SHAPE.pill}
															size={BUTTON_SIZE.compact}
															onClick={() => handleStartSession(contact)}
															endEnhancer={() => <ArrowRight size={16} />}
															overrides={{
																BaseButton: {
																	style: {
																		paddingLeft: "20px",
																		paddingRight: "20px"
																	}
																}
															}}
														>
															Start Session
														</Button>
													</div>
												</div>
											))}
										</div>
									)}
								</>
							)}
						</div>
					</Cell>
				</Grid>
			</ScreenContainer>
		</Layout>
	);
};

export default Contacts;
