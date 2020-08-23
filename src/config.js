export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HFXQ9Hzw9UCX17OMbxOyRGmXTJuOUrFQoEpRoAENAvwz9dJqlFCxTNwEeqekbPI1mQ09ByhNmmzPGQt6GEScLvS009tDos91p",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-dev-attachmentsbucket-1ckvp1hwvwdha"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://urig3g4ixi.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ySiKVbAvW",
    APP_CLIENT_ID: "2mncfjeuuotoj91hcaqe1vmnq2",
    IDENTITY_POOL_ID: "us-east-1:5a39ceec-9bd4-4ada-a488-56b96fa83541"
  }
};
