/**
	"Austria",
	"Australia",
	"Belgium",
	"Bulgaria",
	"Brazil",
	"Canada",
	"Switzerland",
	"Cyprus",
	"Czechia",
	"Germany",
	"Denmark",
	"Estonia",
	"Spain",
	"Finland",
	"France",
	"United Kingdom of Great Britain and Northern Ireland",
	"Greece",
	"Hong Kong",
	"Ireland",
	"India",
	"Italy",
	"Japan",
	"Lithuania",
	"Luxembourg",
	"Latvia",
	"Malta",
	"Malaysia",
	"Netherlands",
	"Norway",
	"New Zealand",
	"Poland",
	"Portugal",
	"Romania",
	"Sweden",
	"Singapore",
	"Slovenia",
	"Slovakia",
	"United States of America"
 */

const stripeConnectSupportedCountries = [
	"AT",
	"AU",
	"BE",
	"BG",
	"BR",
	"CA",
	"CH",
	"CY",
	"CZ",
	"DE",
	"DK",
	"EE",
	"ES",
	"FI",
	"FR",
	"GB",
	"GR",
	"HK",
	"IE",
	"IN",
	"IT",
	"JP",
	"LT",
	"LU",
	"LV",
	"MT",
	"MY",
	"NL",
	"NO",
	"NZ",
	"PL",
	"PT",
	"RO",
	"SE",
	"SG",
	"SI",
	"SK",
	"US"
];

/**
 * Is Stripe Connect available for this given country
 *
 * @var {string} userCountry Can be ISO code 2 or country name
 * @return {boolean}
 */
export const isStripeConnectAvailable = (userCountry) =>
	stripeConnectSupportedCountries.includes(userCountry);
