# Nestjs Hexagonal Prisma PostgreSQL &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Basic server with Nestjs, Hexagonal, Prisma and PostgreSQL. This repository is part of a self-taught supplemental course to help students develop skills.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migration

Synchronize Prisma schema with the database schema. It also performs a migration history. If you change any attribute of your Prisma schema, you must perform a migration again to have the models updated. A connection to the database needs to be established to apply these changes.

```
$ npx prisma migrate dev --name test
```

## Team

Developed by Diego Cortés

- dcortes.net@gmail.com