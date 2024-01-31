<template>
  <div :key="task.id" v-for="task of tasks">
    <TaskItem
      @toggle-task="$emit('toggle-task', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
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
  },
  emits: ['delete-task', 'toggle-task']
}
</script>
