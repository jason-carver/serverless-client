const dev = {
  STRIPE_KEY: "pk_test_n1sBjALNl7edw^zcbsrYf7GS00UG7GhBaN",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-10dqqj0imhdsy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://w02p22aknc.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_CoPUtyj2l",
    APP_CLIENT_ID: "60koq1j4a6d0afnn23tr7tu86",
    IDENTITY_POOL_ID: "us-east-1:fe0af6c9-890c-4874-a148-24c0203e233c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_n1sBjALNl7edw^zcbsrYf7GS00UG7GhBaN",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentbucket-1ueltuktfxhj0"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://cwzveykkf0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_RHO8YvOHn",
    APP_CLIENT_ID: "23e6r3nhvf8cjmsptd67dec6rh",
    IDENTITY_POOL_ID: "us-east-1:fe0af6c9-890c-4874-a148-24c0203e233c"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ?
  prod :
  dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};