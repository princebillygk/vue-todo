<template>
  <div class="task">
    <header>
      <h3>
        {{ task.text }}
      </h3>
      <font-awesome-icon :style="{ color: 'red' }" :icon="['fas', 'xmark']" />
    </header>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: Object
  }
}
</script>

<style scoped>
.task {
  background-color: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task header {
  display: flex;
  justify-content: space-between;
}
.task header i {
  color: red;
}
</style>
