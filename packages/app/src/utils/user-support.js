import isEmpty from "is-empty";
import { getCode } from "country-list";

const stripeConnectSupportedCountries = [
	"Australia",
	"Austria",
	"Belgium",
	// "Bulgaria",
	"Canada",
	// "Czech Republic",
	"Denmark",
	"Estonia",
	"Finland",
	"France",
	"Germany",
	"Greece",
	"Hong Kong",
	"Ireland",
	"Italy",
	"Japan",
	"Latvia",
	"Lithuania",
	"Luxembourg",
	// "Mexico",
	"Netherlands",
	"New Zealand",
	"Norway",
	"Poland",
	"Portugal",
	// "Romania",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Spain",
	"Sweden",
	"Switzerland",
	"United Kingdom",
	"United States"
].map((name) => ({ code: getCode(name), name }));

/**
 * Is Stripe Connect available for this given country
 *
 * @var {string} userCountry Can be ISO code 2 or country name
 * @return {boolean}
 */
export const isStripeConnectAvailable = (userCountry) => {
	return !isEmpty(
		stripeConnectSupportedCountries.find(
			({ name, code }) => name === userCountry || code === userCountry
		)
	);
};
