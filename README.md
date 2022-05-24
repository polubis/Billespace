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
