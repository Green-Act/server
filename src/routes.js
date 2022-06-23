import { Router } from 'express';
import * as plaidController from './controllers/PlaidController';
import * as erc20Controller from './controllers/erc20Controller';

const routes = new Router();

/*
    PLAID ROUTES
*/
routes.get('/api/plaid/create-link', plaidController.createLinkToken);
routes.post('/api/plaid/exchange-token', plaidController.getAccessToken);
routes.get('/api/plaid/transactions', plaidController.getTransactions);

/*
    ERC20 ROUTES
*/
// routes.get('/api/erc20/reward/:value/:address', erc20Controller.reward(req,res));
routes.get('/api/erc20/reward/:value/:address', function(req, res) {
    erc20Controller.reward(req.params.value,req.params.address)
})


/*
    LET IT AT THE END AS ORDER MATTERS
*/
// routes.all('*', (_, res) => res.status(404).send('Page Not Found'));


export default routes;