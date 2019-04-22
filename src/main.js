// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import VueApollo from "vue-apollo";
import DefaultLayout from "~/layouts/Default.vue";
import Vuex from "vuex";
import { ApolloLink, concat } from "apollo-link";

const httpLink = createHttpLink({
  uri: "http://localhost:4040"
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("authToken");
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  });

  return forward(operation);
});

const link = concat(authMiddleware, httpLink);
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({ link, cache });

export default function(Vue, { appOptions }) {
  Vue.use(VueApollo);
  Vue.use(Vuex);

  appOptions.apolloProvider = new VueApollo({
    defaultClient: apolloClient
  });

  appOptions.store = new Vuex.Store({
    state: {
      auth: {
        user: null,
        token: null
      }
    },
    getters: {
      isLoggedIn(state) {
        return !!state.auth.user;
      },
      loggedInUser(state) {
        return state.auth.user;
      }
    },
    mutations: {
      setAuthUser(state, { user, token }) {
        state.auth = { ...state.auth, user, token };
        localStorage.setItem("authToken", token);
      },
      removeAuthUser(state) {
        state.auth = { ...state.auth, user: null, token: null };
        localStorage.removeItem("authToken");
      }
    }
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
