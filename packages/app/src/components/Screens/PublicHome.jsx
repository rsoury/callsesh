/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H3 } from "baseui/typography";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import {
	PhoneCall as PhoneIcon,
	PhoneOff as AnonPhoneIcon,
	DollarSign as PayoutIcon,
	User as UserIcon
} from "react-feather";
import ArrowRight from "baseui/icon/arrow-right";
import ArrowLeft from "baseui/icon/arrow-left";
import Slider from "react-slick";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE,
	KIND as BUTTON_KIND
} from "baseui/button";

import Highlight from "@/components/Highlight";
import SignupActionButton from "@/components/SignupActionButton";
import PhoneMockup from "@/components/PhoneMockup";

const demoSlides = [
	{
		name: "Brendan",
		src: "/static/assets/demo/brendan.jpg"
	},
	{
		name: "Jenny",
		src: "/static/assets/demo/jenny.jpg"
	},
	{
		name: "Christie",
		src: "/static/assets/demo/christie.jpg"
	},
	{
		name: "Willis",
		src: "/static/assets/demo/willis.jpg"
	},
	{
		name: "Samantha",
		src: "/static/assets/demo/samantha.jpg"
	}
];

const sliderSettings = {
	infinite: true,
	speed: 250,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	arrow: false
};

const PublicHomeScreen = () => {
	const [css, theme] = useStyletron();
	const slider = React.createRef();

	const listItemProps = {
		artworkSize: ARTWORK_SIZES.MEDIUM,
		overrides: {
			Root: {
				style: {
					backgroundColor: "transparent",
					marginTop: "10px",
					marginBottom: "20px"
				}
			},
			ArtworkContainer: {
				style: {
					paddingBottom: "0px",
					marginRight: "20px",
					color: theme.colors.accent,
					backgroundColor: theme.colors.accent100,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "10px",
					height: "50px",
					width: "50px"
				}
			},
			Content: {
				style: {
					height: "auto",
					width: "calc(100% - 70px)",
					borderBottomWidth: "0px",
					paddingBottom: "0px"
				}
			}
		}
	};

	return (
		<div id="callsesh-public-home-screen" className={css({ maxWidth: "100%" })}>
			<Grid gridGutters={16}>
				<Cell span={[12, 5, 6]}>
					<div
						className={css({
							height: "100%",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: "column",
							justifyContent: "center",
							padding: "50px 30px 50px 10px",
							position: "relative",
							zIndex: "100",
							backgroundColor: "#fff"
						})}
					>
						<h1
							className={css({
								...theme.typography.DisplaySmall,
								fontWeight: "900",
								marginTop: "0px",
								marginBottom: "0px"
							})}
						>
							Offer your time over a call and <Highlight>get paid</Highlight>.
						</h1>
						<h2 className={css({ ...theme.typography.HeadingSmall })}>
							Share your skills, expert advice and personality with your
							audience and customers. Set your rates and spread your word.
						</h2>
						<div
							className={css({
								width: "100%"
							})}
						>
							<SignupActionButton />
						</div>
					</div>
				</Cell>
				<Cell span={[12, 3, 6]}>
					<div
						className={css({
							display: "flex",
							justifyContent: "flex-end",
							position: "relative",
							overflow: "hidden",
							[theme.mediaQuery.maxMedium]: {
								marginRight: "-40px"
							},
							[theme.mediaQuery.maxSmall]: {
								marginRight: "0px",
								justifyContent: "center"
							}
						})}
					>
						<div
							className={css({
								display: "flex",
								alignItems: "center",
								marginRight: "10px"
							})}
						>
							<Button
								size={BUTTON_SIZE.mini}
								shape={BUTTON_SHAPE.round}
								kind={BUTTON_KIND.secondary}
								onClick={() => slider.current.slickPrev()}
							>
								<ArrowLeft size={22} />
							</Button>
						</div>
						<div
							className={css({
								// transform: "rotate(3deg) scale(0.9)"
							})}
						>
							<PhoneMockup>
								<Slider {...sliderSettings} ref={slider}>
									{demoSlides.map((slide) => (
										<div key={slide.name}>
											<img
												src={slide.src}
												alt={`Callsesh phone demonstration for ${slide.name}`}
											/>
										</div>
									))}
								</Slider>
							</PhoneMockup>
						</div>
						<div
							className={css({
								display: "flex",
								alignItems: "center",
								marginLeft: "10px"
							})}
						>
							<Button
								size={BUTTON_SIZE.mini}
								shape={BUTTON_SHAPE.round}
								kind={BUTTON_KIND.secondary}
								onClick={() => slider.current.slickNext()}
							>
								<ArrowRight size={22} />
							</Button>
						</div>
					</div>
				</Cell>
				<Cell span={12}>
					<div
						className={css({
							position: "relative",
							backgroundColor: "#fff",
							paddingBottom: "50px",
							paddingTop: "25px",
							borderTop: `3px solid rgb(250, 250, 250)`,
							marginTop: "25px",
							[theme.mediaQuery.maxSmall]: {
								zIndex: "100",
								marginTop: "-50%",
								paddingTop: "50px",
								borderColor: theme.colors.primary
							}
						})}
					>
						<div>
							<H3 marginTop="0px">How it works</H3>
							<ListItem artwork={UserIcon} {...listItemProps}>
								<ListItemLabel description="It is completely free to signup. We only make money when you do.">
									Create an account
								</ListItemLabel>
							</ListItem>
							<ListItem artwork={PhoneIcon} {...listItemProps}>
								<ListItemLabel description="You decide when you're available, whenever you want, at the flick of a switch.">
									Go live and accept calls
								</ListItemLabel>
							</ListItem>
							<ListItem artwork={AnonPhoneIcon} {...listItemProps}>
								<ListItemLabel description="We will never release your personal phone number to your callers. Keeping your personal contact information hidden and secure is our priority.">
									Hidden phone numbers
								</ListItemLabel>
							</ListItem>
							<ListItem artwork={PayoutIcon} {...listItemProps}>
								<ListItemLabel description="Set your own hourly rate, and charge by the second. Setup your payouts and get paid when you take calls.">
									Get paid
								</ListItemLabel>
							</ListItem>
						</div>
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default PublicHomeScreen;
