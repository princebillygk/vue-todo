<template>
  <div @dblclick="$emit('toggle-task', task.id)" :class="['task', task.reminder ? 'reminder' : '']">
    <header>
      <h3>
        {{ task.text }}
      </h3>
      <div class="close-btn" @click="$emit('delete-task', task.id)">
        <font-awesome-icon :style="{ color: 'red' }" :icon="['fas', 'xmark']" />
      </div>
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
  box-sizing: border-box;
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

.task.reminder {
  border-left: 5px solid green;
}

.close-btn {
  padding: 5px 10px 3px 10px;
  background-color: #eee;
  border-radius: 10px;
}

.close-btn:hover {
  background-color: #ffeeee;
}
</style>
