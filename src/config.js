const dev = {
  STRIPE_KEY: "pk_test_51HFXQ9Hzw9UCX17OMbxOyRGmXTJuOUrFQoEpRoAENAvwz9dJqlFCxTNwEeqekbPI1mQ09ByhNmmzPGQt6GEScLvS009tDos91p",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-dev-attachmentsbucket-1ckvp1hwvwdha"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "api.kristesting.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ySiKVbAvW",
    APP_CLIENT_ID: "2mncfjeuuotoj91hcaqe1vmnq2",
    IDENTITY_POOL_ID: "us-east-1:5a39ceec-9bd4-4ada-a488-56b96fa83541"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HFXQ9Hzw9UCX17OMbxOyRGmXTJuOUrFQoEpRoAENAvwz9dJqlFCxTNwEeqekbPI1mQ09ByhNmmzPGQt6GEScLvS009tDos91p",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-attachmentsbucket-1clkpk3yj7ixy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "api.kristesting.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Wpjx7h6cT",
    APP_CLIENT_ID: "73ick8ihvsuoq91qjmlmluu1ri",
    IDENTITY_POOL_ID: "us-east-1:b189ca62-5b0b-4f3d-96e7-7171db63bbb6"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
