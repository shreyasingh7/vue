<p align="center">
  <p align="center">
    <a href="https://sentry.io/?utm_source=github&utm_medium=logo" target="_blank">
      <img src="https://sentry-brand.storage.googleapis.com/sentry-logo-black.png" alt="Sentry" height="72">
    </a>
  </p>
  <p align="center">
    Users and logs provide clues. Sentry provides answers.
  </p>
</p>

# Sentry Setup and Development

# Sentry

Sentry fundamentally is a service that helps you monitor and fix crashes in realtime. The server is in Python, but it contains a full API for sending events from any language, in any application.
Full documentation on [sentry](https://docs.sentry.io/)

## Sign up for an account 

Link for signup on sentry [sentry-signup](https://sentry.io/signup/)

## Installation of sentry

> Install the required Sentry Node SDK with npm or yarn:

```bash

# Using yarn
yarn add @sentry/node@5.12.2

# Using npm
npm install @sentry/node@5.12.2

```

## Locate your Sentry DSN :

1. Go to project settings in sentry
2. Settings > Projects > Select the project to track
3. Choose on Client Keys (DSN) to show the DSN

## Configure the SDK
After you completed setting up a project in Sentry, you’ll be given a value which we call a DSN, or Data Source Name.

You need to inform the Sentry Node SDK about your DSN.

Provide the dsn in main.ts

```bash
import * as Sentry from '@sentry/node'

Sentry.init({ dsn: 'https://96f2a7e2715040bc856a31615e373d7d@sentry.io/2200365' })


```

## Define an interceptor for sentry

The interceptor will capture the exception  

## Use the interceptor 

Inject that interceptor to the desired controller by adding these lines:

```bash

import { UseInterceptors } from '@nestjs/common';
import { SentryInterceptor } from './sentry.interceptor';
@UseInterceptors(SentryInterceptor)

```