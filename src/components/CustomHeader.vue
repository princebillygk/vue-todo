<template>
  <header>
    <h1>{{ title }}</h1>
    <CustomButton text="Add task" color="green" />
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
  components: { CustomButton }
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
