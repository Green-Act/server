import { Router } from 'express';
import * as plaidController from './controllers/PlaidController';

const routes = new Router();

/*
    PLAID ROUTES
*/
routes.get('/api/plaid/create-link', plaidController.createLinkToken);
routes.post('/api/plaid/exchange-token', plaidController.getAccessToken);
routes.get('/api/plaid/transactions', plaidController.getTransactions);

routes.all('*', (_, res) => res.status(404).send('Page Not Found'));

export default routes;