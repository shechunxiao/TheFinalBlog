<template>
  <div>
    这里是主页
    {{ title }}
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('/test')
    return { title: data }
  }
}
</script>

<style>

</style>
