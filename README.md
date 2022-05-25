# Billespace

## First run tutorial

1. `cd billennium`
2. `npm install`
3. `npm start` - runs all apps in monorepo in our case we have only one

## Creating TypeScript library

`cd billennium`
`npx nx generate @nrwl/js:lib api` or `npx nx generate @nrwl/js:lib api --appProject=billespace`

Remember to stop dev server and run `npm start` again for affected code.
Also there will be probably need to restart TypeScript server.

## Runing storybook for ui

`cd billennium`
`npx nx run ui:storybook`

## API contract

Located inside `billennium/libs/api`.

## BDD scenarios

Located inside `scenarios` directory.

Examples:
https://gist.github.com/vitorebatista/d979332bb57c1ad17b031f7e3e0cd677