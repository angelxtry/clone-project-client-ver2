import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloClientOptions,
  NormalizedCacheObject,
} from 'apollo-boost';

const cache = new InMemoryCache();
cache.writeData({
  data: {
    auth: {
      __typename: 'Auth',
      isLoggedIn: Boolean(localStorage.getItem('jwt')),
    },
  },
});

const apolloOption: ApolloClientOptions<NormalizedCacheObject> = {
  cache,
  link: new HttpLink({
    uri: 'http://127.0.0.1:4000/graphql',
  }),
  connectToDevTools: true,
  resolvers: {
    Mutation: {
      logUserIn: (_, { jwt }): null => {
        localStorage.setItem('jwt', jwt);
        cache.writeData({
          data: {
            __typename: 'Auth',
            isLoggedIn: true,
          },
        });
        return null;
      },
      logUserOut: (): null => {
        localStorage.removeItem('jwt');
        cache.writeData({
          data: {
            __typename: 'Auth',
            isLoggedIn: false,
          },
        });
        return null;
      },
    },
  },
};

const client = new ApolloClient(apolloOption);

export default client;
