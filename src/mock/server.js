import { rest } from 'msw';
import { smartCables, resellers, countries } from './filterResponses';
import { volta } from './dashboardResponses';

export const handlers = [
  rest.post(`${process.env.REACT_APP_HOST}/login`, (req, res, ctx) => {
    if (req.body.username === 'admin' && req.body.password === 'asdf1234') {
      return res(
        ctx.delay(400),
        ctx.status(200),
        ctx.json({ token: 'ultra-secret-token' })
      );
    } else {
      return res(
        ctx.delay(400),
        ctx.status(403),
        ctx.json({ message: 'Non-authorized' })
      );
    }
  }),
  rest.get(`${process.env.REACT_APP_HOST}/smart-cables`, (req, res, ctx) => {
    return res(ctx.delay(200), ctx.status(200), ctx.json([...smartCables]));
  }),
  rest.get(`${process.env.REACT_APP_HOST}/resellers`, (req, res, ctx) => {
    return res(ctx.delay(200), ctx.status(200), ctx.json([...resellers]));
  }),
  rest.get(`${process.env.REACT_APP_HOST}/countries`, (req, res, ctx) => {
    return res(ctx.delay(200), ctx.status(200), ctx.json([...countries]));
  }),
  rest.get(`${process.env.REACT_APP_HOST}/dashboard`, (req, res, ctx) => {
    const appliance = req.url.searchParams.get('appliance');
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json([...volta[appliance]])
    );
  }),
];
