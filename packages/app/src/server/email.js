import isEmpty from "is-empty";
import { Client as Postmark } from "postmark";

import { postmark as config, publicUrl } from "@/env-config";

// const defaultFrom = "info@callsesh.com";
const defaultFrom = "test@towster.co";

const client = new Postmark(config.apiToken);

export const getClient = () => client;

/**
 * Use Postmark to send emails
 */
export const sendEmail = (
	to,
	subject,
	body,
	{ from = defaultFrom, useHtml = true } = {}
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
	to,
	liveUser,
	{ from = defaultFrom } = {}
) => {
	if (isEmpty(to)) {
		throw new Error("User email does not exist");
	}

	const params = {
		From: from,
		To: to,
		TrackOpens: true,
		TrackLinks: "HtmlAndText",
		TemplateAlias: "live-user-notification",
		TemplateModel: {
			picture: liveUser.picture,
			name: liveUser.givenName,
			call_url: `${publicUrl}/${liveUser.username}`,
			purpose: liveUser.purpose,
			message: liveUser.messageBroadcast
		}
	};

	return client.sendEmailWithTemplate(params);
};
