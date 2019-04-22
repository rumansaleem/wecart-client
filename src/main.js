import DefaultLayout from '~/layouts/Default.vue'
import apolloClient from './apollo-client'
import store from './store'
import VueApollo from 'vue-apollo'

export default function(Vue, { appOptions }) {
  Vue.use(VueApollo)

  appOptions.apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

  appOptions.store = store

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
