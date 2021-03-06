// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'Hasura',
      url: 'http://localhost:8080/v1/graphql',
      headers: {
        'X-Hasura-Admin-Secret': 'my-secret',
      },
    },
    // Files processed by the extension
    includes: ['src/**/*.ts', 'src/**/*.graphql'],
    excludes: ['src/graphqlRequestSdk.ts'],
  },
}
