# Callsesh

Meter your phone calls with Callsesh.
Eliminate the hassle in quoting, time tracking, invoicing and payment collection.
You can collaborate and consult with your callers all while charging for your time.

## Software

This web application uses Twilio (Proxy and Sync) and Stripe to facilitate real-time metered call sessions between users.


## Packages

- `app`
  - A [Next.js](https://nextjs.org/) web application serving a frontend experience using [BaseWeb UI](https://baseweb.design/) components coupled with server-side functions to facilitate API-driven logic.
- `auth`
  - A React.js app to be served through Auth0 hosted authenticated pages. This keeps the same visual experience while leveraging the security and simplicity of authentication management in Auth0.
- `chat`
  - A package to manage scripts and styling for [Rocket.Chat](https://rocket.chat/). Rocket.Chat is used to serve a robust chat experience when metered sessions persist after a phone call ends.
- `utils`
  - Consists of shared utlity modules
- `workflows`
  - State machines for AWS Step Functions deployed using the Serverless Framework to create Jamstack compatible server-side **delays**.

## Third-Party Cloud/Software Services

This package uses a number of cloud/software services

- [Twilio Proxy](https://www.twilio.com/docs/proxy) for call masking and applying cloud-based logic to phone calls.
- [Twillo Sync](https://www.twilio.com/docs/sync) for realtime frontend updates
- [Auth0](https://auth0.com/) for authentication
- [Stripe](https://stripe.com/au) for payments
- [Uploadcare](https://uploadcare.com/) for Jamstack compatible file uploads -- Can be removed. Used only for Profile Images.
- [Postmark](https://postmark.com/) for Transactional Emails
- Google Analytics for website tracking

## Secret Management

[Chamber](https://github.com/segmentio/chamber) is a phenomenal library and is recomended to manage secrets used for environment variables.

```
NODE_ENV=production chamber exec callsesh -- yarn build:auth
```

## Local Development

This application includes endpoints that are used as Callback URLs from Twilio Proxy.
ie. When a phone call ends, there needs to be some cleanup and payment process. This is managed by capturing a webhook event from Twilio Proxy.

Use Ngrok `ngrok http 80` to run a Publicly Accessable Tunnel to the Application
Set the env variable `PUBLIC_PROXY_URL` to the ngrok secure address
This will allow cloud operations to still function, like Twilio Callbacks and Workflows

## Deployment

See the `package.json` file to review build & deployment scripts.

1. `chat` scripts and styles are to be applied manually to a fresh instance of Rocket.Chat. We found Rocket.Chat on Docker was simplest deployment method for this Chat Application. You can follow a guide here on how to proceed with Rocket.Chat installation: [https://docs.rocket.chat/installing-and-updating/docker-containers](https://docs.rocket.chat/installing-and-updating/docker-containers).
	Once Rocket.Chat is operational either remotely or locally, be sure to add update your environment variables accordingly.
2. `workflow` does not require a build process, and is simply deployed using the Serverless CLI `sls deploy -s prod`.
	The result API Gateway endpoint is then to be added as an environment variable to the `.env.[production|development]` file.
3. `app` package is desiged to be deployed to Vercel, however, can be modified to deploy to anywhere Next.js can.
4. `auth` package will build static files that can be deployed to S3 and loaded into the Auth0 Hosted Page Template.
	In the `vercel.json` file, we're using a Proxy of the S3 Bucket to simplify `auth` static file distribution over a CDN, however, this is entirely optional.
5. `utils` is built during other package build processes

## (Optional) Secure development -- Local HTTPS

`yarn dev-secure`

Use `mkcert app.local` to produce certs

## Contribution

Simply fork this repo and make it your own, or create a pull request and we can build something awesome together!

## Enterprise Support

Managing a fleet of freelance customer support specialists? Contact us at [Web Doodle](https://www.webdoodle.com.au/) to discuss tailored solutions.


## Found this repo interesting?

Feel free to follow me on [Github](https://github.com/rsoury) or [Twitter](https://twitter.com/@ryan_soury)
