import isEmpty from "is-empty";
import { Client as Postmark } from "postmark";

import { postmark as config, publicUrl } from "@/env-config";

const client = new Postmark(config.apiToken);

export const getClient = () => client;

/**
 * Use Postmark to send emails
 */
export const sendEmail = (
	to,
	subject,
	body,
	{ from = "info@callsesh.com", useHtml = true } = {}
) => {
	const params = {
		From: from,
		To: to,
		Subject: subject,
		TrackOpens: true,
		TrackLinks: "HtmlAndText"
	};

	if (useHtml) {
		params.HtmlBody = body;
	} else {
		params.TextBody = body;
	}

	return client.sendEmail(params);
};

/**
 * Use Postmark to send emails
 */
export const sendLiveNotification = (
	user,
	{ from = "info@callsesh.com" } = {}
) => {
	if (isEmpty(user.email)) {
		throw new Error("User email does not exist");
	}

	const params = {
		From: from,
		To: user.email,
		TrackOpens: true,
		TrackLinks: "HtmlAndText",
		TemplateAlias: "live-user-notification",
		TemplateModel: {
			picture: user.picture,
			name: user.firstName,
			view_user_url: `${publicUrl}/${user.username}`,
			purpose: user.purpose,
			message: user.messageBroadcast
		}
	};

	return client.sendEmailWithTemplate(params);
};
