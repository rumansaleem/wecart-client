<template>
  <Layout>
        <div class="m-auto">
            <form @submit.prevent="login()" class="bg-white p-6 border border-gray-400 rounded mb-8">
                    <h4 class="text-xl font-semibold mb-2">Login</h4>
                    <div class="flex flex-col -my-2 mb-2">
                        <input type="email" class="flex-1 border my-2 px-3 py-1 rounded" v-model="form.email" required placeholder="Email">
                        <input type="password" class="flex-1 border my-2 px-3 py-1 rounded" v-model="form.password" required placeholder="Password">
                        <button type="submit" class="my-2 px-4 py-1 bg-teal-500 text-white border border-teal-500 rounded">Login</button>
                    </div>
            </form>
        </div>
  </Layout>
</template>

<script>
import gql from 'graphql-tag';
import { mapMutations } from 'vuex';
export default {
  metaInfo: {
    title: 'Login'
  },
  data() {
    return {
        form: {
            email: '',
            password: '',
        }
    }
  },
  methods: {
    ...mapMutations(['setAuthUser']),
    async login() {
        const {data: {login: {user, token, message}}} = await this.$apollo.query({
            query: gql`query ($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                    user {
                        id
                        name
                        email
                    }
                    message
                }
            }`,
            variables: {
                ...this.form
            }
        });

        if (user && token) {
            this.setAuthUser({user, token});
        }

        setTimeout(() => this.$router.push({path: '/users'}), 500);
    }
  },
}
</script>
