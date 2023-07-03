# Hyfe test app

This project is a Next.js application that includes a Chart component with a REST API endpoint using
the openapi-typescript-codegen library. The chart visualizes a value on a seesaw-like graph, and the application
fetches data from the REST API to populate the chart dynamically.

## To enhance the testing experience

Change in `lib/utils.ts` line 15:

```ts
const oneWeekAgo = format(startOfDay(subDays(new Date(), 7)), "yyyy-MM-dd");
```

to:

```ts
const oneWeekAgo = format(startOfDay(subDays(new Date(), 1)), "yyyy-MM-dd");
```

and you will get a more varied cough percentage.

## Usage

1. Clone the repository and navigate to the project directory.
2. Install the dependencies by running the following command: `yarn install`
3. (optional) Generate the API client using the openapi-typescript-codegen library: `yarn generate`
4. Start the development server `yarn dev`
5. Open your browser and visit <http://localhost:3000> to see the page in action.

## Configuration

The project includes an `api/openapi.yaml` file that represents the OpenAPI specification for your REST API.
Modify this file to match the endpoint and data structure of your API.

The generated API client is located in the `src/generated/openapi-client` directory. Use this client to make
requests to your REST API from within the Next.js application.

## Credits

The Chart component is built using the Recharts library. You can find more information and documentation
about Recharts at [https://recharts.org](https://recharts.org).

The openapi-typescript-codegen library is used for generating the API client based on the OpenAPI specification.
You can find more information and documentation about openapi-typescript-codegen at
[https://github.com/ferdikoomen/openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen).
