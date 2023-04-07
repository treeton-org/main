# Main

![cover](docs/cover.png)

## Installation

```shell
yarn install && yarn env
```

## Start development

```shell
yarn start
```

## Build production and run on localhost

```shell
yarn prod
```

## Build production

```shell
yarn build
```

## Remove build

```shell
yarn rm
```

## Linter

```shell
yarn lint
```

## Prettify code using linter

```shell
yarn fix
```

## Up local

[Up infrastructure](https://github.com/treeton-org/team#readme)

```shell
docker network create traefik
docker compose --env-file .env.local up
```

## Deploy on server

### Set secrets

* `SSH_DEPLOY_PRIVATE_KEY` - e.g. `AAAwEAA ...`

### Push code and check GitHub actions

[GitHub action](https://github.com/treeton-org/main/actions/workflows/build-and-deploy.yaml)

## Docker network scheme

```mermaid
flowchart TD
    %% Traefik
    traefik(traefik)-->|traefik|nginx(nginx)

subgraph Main
    nginx(nginx)
end
```
