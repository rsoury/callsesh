export const isProd = process.env.NODE_ENV === "production";
export const stage = process.env.REACT_APP_STAGE;

export const sentry = {
	dsn: process.env.REACT_APP_SENTRY_DSN || "",
	release: process.env.REACT_APP_SENTRY_RELEASE || ""
};

export const authConfig =
	stage === "production"
		? window.config || {}
		: {
				assetsUrl: "",
				auth0Domain: "callsesh.auth0.com",
				auth0Tenant: "callsesh",
				clientConfigurationBaseUrl: "https://cdn.auth0.com/",
				callbackOnLocationHash: false,
				callbackURL:
					"https://manage.auth0.com/tester/callback?connection=google-oauth2",
				cdn: "https://sdk.auth0.com/",
				clientID: "fARU892qwFJFZBiTvR6BncKUkN6HtyE1",
				dict: { signin: { title: "All Applications" } },
				extraParams: {
					protocol: "oauth2",
					prompt: "consent",
					scope: "openid profile",
					tenant: "callsesh",
					type: "code",
					clientID: "fARU892qwFJFZBiTvR6BncKUkN6HtyE1",
					redirectURI:
						"https://manage.auth0.com/tester/callback?connection=google-oauth2",
					_csrf: "P1nyvvTe-wGIkqSRmD-Oh2oP9R_DN6CXNhe4",
					_intstate: "deprecated",
					state:
						"g6Fo2SAxX0ZCaWR4TUFSV21ISWFsbFBmMmw1Rko5MkY5OFRWUqN0aWTZIEhJNE9TbjZXTEgzUHB2TmZ4VC1GNW0xRUFIOEdNOU4yo2NpZNkgZkFSVTg5MnF3RkpGWkJpVHZSNkJuY0tVa042SHR5RTE"
				},
				internalOptions: {
					protocol: "oauth2",
					prompt: "consent",
					scope: "openid profile",
					tenant: "callsesh",
					type: "code",
					clientID: "fARU892qwFJFZBiTvR6BncKUkN6HtyE1",
					redirectURI:
						"https://manage.auth0.com/tester/callback?connection=google-oauth2",
					_csrf: "P1nyvvTe-wGIkqSRmD-Oh2oP9R_DN6CXNhe4",
					_intstate: "deprecated",
					state:
						"g6Fo2SAxX0ZCaWR4TUFSV21ISWFsbFBmMmw1Rko5MkY5OFRWUqN0aWTZIEhJNE9TbjZXTEgzUHB2TmZ4VC1GNW0xRUFIOEdNOU4yo2NpZNkgZkFSVTg5MnF3RkpGWkJpVHZSNkJuY0tVa042SHR5RTE"
				},
				prompt: true,
				widgetUrl: "https://cdn.auth0.com/w2/auth0-widget-5.1.min.js",
				isThirdPartyClient: false,
				authorizationServer: {
					url: "https://callsesh.auth0.com",
					issuer: "https://callsesh.auth0.com/"
				},
				colors: { page_background: "#000000", primary: "#ea5323" }
		  };
