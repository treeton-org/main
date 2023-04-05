# Main

![cover](docs/cover.png)

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

## Pretty code using linter

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

Auto [GitHub action](https://github.com/treeton-org/main/actions/workflows/build-and-deploy.yaml)
