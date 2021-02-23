<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Users />
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users.vue'

export default {
  name: 'Home',
  components: {
    Users
  }
}
</script>
