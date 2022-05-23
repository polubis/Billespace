import { rest, setupWorker } from 'msw';
import { environment } from '../../environments/environment';

export const worker = setupWorker(
  rest.get(environment.API + '/login', (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json({ id: 0 }));
  })
);
