# High performance Next + React + GraphQL starter kit

The purpose of this starter kit is not to be complete solution, but introduction for creating high performance websites with Next.js, React and GraphQL. We use this repository for new projects at [Atheros Intelligence](https://atheros.ai/) and as the repository for our articles at [GraphQL Mastery](https://atheros.ai/blog)

* Clone the repository with `git clone git@github.com:atherosai/next-react-graphql-apollo-hooks.git`
* To preserve secure dependencies in `package-lock.json` use `npm ci` to install packages

## Node.js version

Even though that the starter kit should work with older `Node` versions, I would suggest to use latest Node `LTS version`. In `package.json`. We have set requirements as follows:

```json
 "engines": {
    "node": ">=10.0.0",
    "npm": ">6"
  },
```

## Technologies & main features

* Next.js
* React
* GraphQL (Apollo server)
* Apollo client
* React Apollo Hooks
* Node.js
* TypeScript
* GraphQL Code Generator
* Jest

## Production usage

In order to achieve the best performance you should have enabled http/2 and also enable compression in your reverse proxy (nginx). Up to date Node.js server is also very benefitial.

## Environment configuration

The solution for environment variables is built using [dotenv](https://github.com/motdotla/dotenv) library and two environment variables. Well known `NODE_ENV` variable can be set as `development` or `production` and our `CUSTOM_ENV`, which defines the environment. This can be your `staging`, `production`, `local` environment or even your build server. These two variables define the name of `.env` file in `/secrets` folder that will be used. If we would like to for example define the config for our staging environment we would create the file called `/secrets/production-staging.env` and place all the environment variables there. The example for such a file can be for example the following that we can use for development

```bash
NODE_ENV=development
CUSTOM_ENV=local
PORT=3000
API_URL=http://localhost:3000/graphql
HOST=http://localhost:3000
```

## Security and audit

You can run security audit on dependencies with. Be sure that you use `package-lock.json` in our repository.

`npm audit`
