# Callsesh

## Secret Management

Chamber is used to manage secrets: https://github.com/segmentio/chamber

```
NODE_ENV=production chamber exec callsesh -- yarn build:auth
```

## Secure development -- Local HTTPS
`yarn dev-secure`

Use `mkcert app.local` to produce certs


## Local Development

Use Ngrok `ngrok http 80` to run a Publicly Accessable Tunnel to the Application
Set the env variable `PUBLIC_PROXY_URL` to the ngrok secure address
This will allow cloud operations to still function, like Twilio Callbacks and Workflows
