## Architecture and Design

The app follows with 2 layers:

Application: Each model contains the behaviours necessary to retrieve data from the infrastructure layer.

Infrastructure: Support layer to retrieve external data from  `https://the-one-api.dev/sign-up`

The `index.ts` file couple all features from the SDK.