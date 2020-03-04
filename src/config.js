export default {
   MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "bucketonotes"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://fx1w7oolz1.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_KQesvlsjM",
      APP_CLIENT_ID: "6rs6r0rsuk7uq6npbdnbuqncue",
      IDENTITY_POOL_ID: "us-east-1:d84a5697-1c00-4908-9434-16e4e11ff5dd"
    },
    STRIPE_KEY: "pk_test_n1sBjALNl7edw^zcbsrYf7GS00UG7GhBaN"  
  };