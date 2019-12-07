<template>
  <div>
    <button @click="goHome">goHome</button>
    <p>
      <router-link to="/firstPage">toHome</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'login',
  methods: {
    goHome () {
      this.$router.push('/firstPage')
    }
  }
}
</script>
<style lang="stylus" scoped></style>
