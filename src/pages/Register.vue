<template>
  <Layout>
        <div class="m-auto">
            <form @submit.prevent="register()" class="bg-white p-6 border border-gray-400 rounded mb-8">
                    <h4 class="text-xl font-semibold mb-4">Register</h4>
                    <div class="flex flex-col -my-2 mb-2">
                        <input type="text" class="flex-1 border my-2 px-3 py-1 rounded" v-model="form.name" required placeholder="Full Name">
                        <input type="email" class="flex-1 border my-2 px-3 py-1 rounded" v-model="form.email" required placeholder="Email">
                        <input type="password" class="flex-1 border my-2 px-3 py-1 rounded" v-model="form.password" required placeholder="Password">
                        <input type="password" class="flex-1 border my-2 px-3 py-1 rounded" required placeholder="Confirm Password">
                        <button type="submit" class="my-2 px-4 py-1 bg-teal-500 text-white border border-teal-500 rounded">Register</button>
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
            name: '',
            email: '',
            password: '',
        },
        registerQuery: gql`mutation ($name: String!, $email: String!, $password: String!) {
            createUser(name: $name, email: $email, password: $password) {
                id
            }
        }`,
        loginQuery: gql`query ($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                token
                user {
                    id
                    name
                    email
                    isAdmin
                }
            }
        }`
    }
  },
  methods: {
    ...mapMutations(['setAuthUser']),
    async register() {
    
        await this.$apollo.mutate({
            mutation: this.registerQuery,
            variables: {
                ...this.form
            }
        });
        const {data: {login:{token, user}}} = await this.$apollo.query({
            query: this.loginQuery,
            variables: {
                email: this.form.email,
                password: this.form.password,
            }
        });
        

        if(user && token) {
            this.setAuthUser({user, token});
            this.form = {name:'', email: '', password:''}
            this.$router.push({path: '/'});
        }
    }
  }
}
</script>
