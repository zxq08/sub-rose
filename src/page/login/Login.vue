<template>
  <div class="login-wrap">
    <home-header></home-header>
    <div class="form-wrap">
      <cube-form class="form" :model="model" @validate="validateHandler" @submit="submitHandler">
        <cube-form-group>
          <cube-form-item :field="fields[0]"></cube-form-item>
          <cube-form-item :field="fields[1]"></cube-form-item>
        </cube-form-group>
        <cube-form-group>
          <cube-button type="submit">Submit</cube-button>
        </cube-form-group>
      </cube-form>
    </div>
  </div>
</template>
<script>
import homeHeader from '@/components/common/header'
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      validity: {},
      valid: undefined,
      model: {
        userValue: '',
        passValue: ''
      },
      fields: [
        {
          type: 'input',
          modelKey: 'userValue',
          label: 'username',
          props: {
            placeholder: '请输入用户名'
          },
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'passValue',
          label: 'password',
          props: {
            placeholder: '请输入密码'
          },
          rules: {
            required: true
          }
        }
      ]
    }
  },
  components: {
    homeHeader
  },
  methods: {/*
    goHome () {
      this.$router.push('/firstPage')
    }, */
    submitHandler (e) {
      console.log('submit')
      console.log(this.model.userValue)
      console.log(this.model.passValue)
      let data = new FormData()
      data.append('username', this.model.userValue)
      data.append('password', this.model.passValue)
      axios.post('/login', data)
        .then(res => {
          console.log(res)
        })
      // debugger
      return false
      /* this.$router.push('/firstPage') */
    },
    validateHandler (result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    }
  }
}
</script>
<style lang="stylus" scoped>
.login-wrap
  height 100vh
</style>
