<template>
  <container>
    <div class="p-home bg-cool-grey-050 h-full">
      <div class="loginForm">
       
            <label for="username">Username</label>
            <input type="text" id="username" v-model="email">
            <input type="text" id="username" v-model="password">
            <button @click="submit">Submit</button>
          
        
      </div>
    </div>
  </container>
</template>

<script>
import container from '../../wrappers/flex-wrapper/0001'
import axios from 'axios';
export default {
name: 'page__home',
components: {
  container
},
data() {
  return {
    email: '',
    password: ''
  }
},
methods: {
  submit() {
    axios({
      method:'post',
      url: 'http://127.0.0.1:4100/auth/local/',
      params: {
        email: this.email,
        password: this.password
      }
    }).then((response) =>{
      console.log(response)
    })
  }
}
}
</script>

<style lang="scss">


</style>
