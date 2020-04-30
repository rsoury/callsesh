# Wagecall App

Built on Next.js

## Authentication with Auth0
Please not that Auth0 will only ask for user consent or authorisation duration checkout when using `localhost` inside the callback urls.
During authentication development, set `PUBLIC_URL=http://app.local` and run with `yarn dev:app -- -- -p 80` from root. Make sure you're `/etc/hosts` are setup correctly.
