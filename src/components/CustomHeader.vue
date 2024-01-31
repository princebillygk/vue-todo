<template>
  <header>
    <h1>{{ title }}</h1>
    <CustomButton v-show="homePage" @click="$emit('btn-click')" text="Add task" color="green" />
  </header>
</template>

<script>
import CustomButton from './CustomButton.vue'

export default {
  name: 'CustomHeader',
  props: {
    title: {
      type: String
    }
  },
  components: { CustomButton },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
