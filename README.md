# React-TypeScript Project Starter

## Project Resources

- [Setting Up eslint on TypeScript project](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)
- [Codevolution - React + Webpack + TypeScript Starter](https://www.youtube.com/watch?v=Elpu7CIuqjY)

## Changing environment variable values dependent upon node environment

As an example, lets say we have two backends, one for the development environment and another for the production environment, we would need to switch between these easily as the NODE_ENV value changes. Since we've created webpack configurations for each environment, it would make sense to add this functionality into these configurations.

```js
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map', // this is the value that CRA recommends for the dev environment
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify('apiKeyValue'),
      'process.env.API_URL': JSON.stringify('apiUrlValue'),
    }),
  ],
};
```

When this is replicated within the production and test environment configs using unique values for each. It becomes easy to reference the API_KEY and API_URL values in our API queries without any additional logic.
