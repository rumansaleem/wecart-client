<template>
  <Layout>
    <div class="h-full flex-1 flex flex-col">
      <div class="bg-white p-4 rounded border border-gray-400">
        <h3 class="text-xl font-bold mb-8">Users</h3>
        <ul v-if="isLoggedIn" class="-my-4">
          <li v-for="user in users" :key="user.id" class="my-4">
            <div class="flex p-3 hover:bg-gray-100 rounded">
              <h4 class="text-xl font-semibold mb-1">
                {{ user.name }}
                <small class="text-gray-500 ml-2" v-text="user.email">  </small>
              </h4>
              <button class="ml-auto px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                title="This button doesn't work yet">Delete</button>
            </div>
          </li>
        </ul>
        <p v-else>
          Please <g-link to="/login" class="hover:underline text-teal-500">login</g-link> to view all users.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import gql from 'graphql-tag';
import { mapGetters } from 'vuex';
export default {
  metaInfo: {
    title: 'Manage Users'
  },
  data() {
    return {
      newUser:{
        name: '',
        email: '',
        isAdmin: false
      },
      users: []
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  apollo: {
    users: gql`query {
      users {
        id
        name
        email
      }
    }`
  },
  methods: {
    async createUser() {
      const {data: {createUser: user}} = await this.$apollo.mutate({
        mutation: gql`mutation ($name: String!, $email: String!, $isAdmin: Boolean) {
          createUser(name: $name, email: $email, isAdmin: $isAdmin) {
            id
            name
            email
          }
        }`,
        variables: this.newUser
      });
      
      this.users.unshift(user);

      this.newUser = {
        name: '',
        email: '',
        isAdmin: false,
      };

    }
  }
}
</script>
