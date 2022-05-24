import { logIn } from '@billennium/api';
import { rest, setupWorker } from 'msw';

export const worker = setupWorker(
  rest.get(logIn.url(), (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200));
  })
);
