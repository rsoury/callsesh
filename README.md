# Callsesh

## Secret Management

Chamber is used to manage secrets: https://github.com/segmentio/chamber

```
NODE_ENV=production chamber exec callsesh -- yarn build:auth
```

## Secure development -- Local HTTPS
`yarn dev-secure`

Use `mkcert app.local` to produce certs
