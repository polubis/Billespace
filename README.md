# Billespace

## First run tutorial

[WARNING] You should use Node 16 to be able to use the project properly. <br/> Node > 16 causes errors.

1. `cd billennium`
2. `npm install`
3. `npm start` - runs all apps in monorepo in our case we have only one

## Creating TypeScript library

`cd billennium`
`npx nx generate @nrwl/js:lib api` or `npx nx generate @nrwl/js:lib api --appProject=billespace`

Remember to stop the dev server and run `npm start` again for affected code. Also, there will be probably a need to restart the TypeScript server.

## Running storybook for UI

`cd billennium`
`npx nx run ui:storybook`

## BDD scenarios

Located inside `scenarios` directory.

File `dictionary` **yaml** contains needed definitions.
Commented scenarios should not be taken into account

## Testing

### e2e

Every scenario from the `scenarios` directory should be covered with the e2e test.

Command to run e2e tests: `npx nx e2e billespace-e2e --watch`

### Unit tests/integration tests

Up to you.

Command to run these tests: `npm run test` or `npx nx test --watch`.

If you want to run single project tests: `npx nx test sm --watch`.
