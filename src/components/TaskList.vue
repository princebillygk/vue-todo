<template>
  <div :key="task.id" v-for="task of tasks">
    <TaskItem :task="task" />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
  name: 'TaskLists',
  props: {
    tasks: Array
  },
  components: {
    TaskItem
  }
}
</script>
