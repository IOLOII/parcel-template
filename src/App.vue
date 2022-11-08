<template>
  <div class="container">
    <h1>Hello {{ name }}!</h1>
    <img src="/static/logo.svg" alt="" />
    <el-button type="primary" @click="request">Primary</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'Vue'
      }
    },
    methods: {
      request() {
        $axios
          .get('/tasks')
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
            $message.success('Clicked')
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-around;
    align-item: center;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
    width: 200px;
    height: 100vh;
  }
</style>
