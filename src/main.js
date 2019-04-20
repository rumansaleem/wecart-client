// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import VueApollo from 'vue-apollo';
import DefaultLayout from '~/layouts/Default.vue'

const link = createHttpLink({
  uri: 'http://localhost:4000'  
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({ link, cache})

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(VueApollo);
  
  appOptions.apolloProvider = new VueApollo({
    defaultClient: apolloClient
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
