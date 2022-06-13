import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

let PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
let PLAID_SECRET = process.env.PLAID_SECRET;
let PLAID_ENV = process.env.PLAID_ENV || 'sandbox';

// PLAID_PRODUCTS is a comma-separated list of products to use when initializing
// Link. Note that this list must contain 'assets' in order for the app to be
// able to create and retrieve asset reports.
let PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || 'transactions').split(
    ',',
);
  
// PLAID_COUNTRY_CODES is a comma-separated list of countries for which users
// will be able to select institutions from.
let PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(
    ',',
);

// Parameters used for the OAuth redirect Link flow.
//
// Set PLAID_REDIRECT_URI to 'http://localhost:3000'
// The OAuth redirect flow requires an endpoint on the developer's website
// that the bank website should redirect to. You will need to configure
// this redirect URI for your client ID through the Plaid developer dashboard
// at https://dashboard.plaid.com/team/api.
let PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || '';

// Parameter used for OAuth in Android. This should be the package name of your app,
// e.g. com.plaid.linksample
let PLAID_ANDROID_PACKAGE_NAME = process.env.PLAID_ANDROID_PACKAGE_NAME || '';

let client

export const initPlaid = () => {
    PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
    PLAID_SECRET = process.env.PLAID_SECRET;
    PLAID_ENV = process.env.PLAID_ENV || 'sandbox';
    PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || 'transactions').split(',');
    PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(',');
    PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || '';
    PLAID_ANDROID_PACKAGE_NAME = process.env.PLAID_ANDROID_PACKAGE_NAME || '';
    
    const configuration = new Configuration({
        basePath: PlaidEnvironments[PLAID_ENV],
        baseOptions: {
          headers: {
            'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
            'PLAID-SECRET': PLAID_SECRET,
            'Plaid-Version': '2020-09-14',
          },
        },
    });
      
    client = new PlaidApi(configuration);
}

export const createLinkToken = async (req, res) => {
    const configs = {
        user: {
            // This should correspond to a unique id for the current user.
            client_user_id: 'user-id',
        },
        client_name: 'Plaid Quickstart',
        products: PLAID_PRODUCTS,
        country_codes: PLAID_COUNTRY_CODES,
        language: 'en',
    };

    if (PLAID_REDIRECT_URI !== '') {
        configs.redirect_uri = PLAID_REDIRECT_URI;
    }

    if (PLAID_ANDROID_PACKAGE_NAME !== '') {
        configs.android_package_name = PLAID_ANDROID_PACKAGE_NAME;
    }

    try {
        const createTokenResponse = await client.linkTokenCreate(configs);
        res.send(createTokenResponse.data);
    } catch (e) {
        console.log(e)
        res.send('Error!')
    }
}