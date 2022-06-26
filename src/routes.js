import { Router } from 'express';
import * as plaidController from './controllers/PlaidController';

const routes = new Router();

/*
    PLAID ROUTES
*/
routes.get('/api/plaid/create-link', plaidController.createLinkToken);
routes.post('/api/plaid/exchange-token', plaidController.createAccessToken);
routes.get('/api/plaid/user-token/:wallet', plaidController.getAccessToken);
routes.get('/api/plaid/transactions/:wallet', plaidController.getTransactions);

routes.all('*', (_, res) => res.status(404).send('Page Not Found'));

export default routes;