<template>
    <a href="#logout" @click.prevent="logout">
        <slot/>
    </a>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'Logout',
    methods: {
        ...mapMutations(['removeAuthUser']),
        logout() {
            this.removeAuthUser();
            this.$router.replace('/');
        }
    },
}
</script>
