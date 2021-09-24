import isUrl from "is-url";
import Url from "url-parse";
import isEmpty from "is-empty";

/**
 * Validate social url
 * Take static hostname, compare against value host with or without www subdomain
 * Check that pathname exists unless checking for subdomain
 *
 * @param   {string}  hostname   [hostname description]
 * @param   {boolean}  subdomain  [subdomain description]
 * @param   {string}  value      [value description]
 *
 * @return  {boolean}             [return description]
 */
const validateSocialUrl =
	(hostname, { subdomain = false } = {}) =>
	(value) => {
		if (!value) {
			return true;
		}
		if (isUrl(value)) {
			const url = new Url(value);

			if (subdomain) {
				const [, ...pieces] = url.host.split(".");
				const domain = pieces.join(".");
				return domain === value;
			}

			return (
				(url.host === hostname || url.host === `www.${hostname}`) &&
				!isEmpty(url.pathname.slice(1))
			);
		}
		return false;
	};

export default validateSocialUrl;
