<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <TaskList @toggle-task="toggleTask" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import TaskList from '../components/TaskList.vue'
import AddTask from '../components/AddTask.vue'

export default {
  name: 'HomePage',
  components: { TaskList, AddTask },
  props: {
    showAddTask: Boolean
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    async addTask(task) {
      try {
        const res = await fetch('http://localhost:3000/tasks', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(task)
        })
        const data = await res.json()
        this.tasks = [...this.tasks, data]
      } catch (err) {
        console.log(err)
      }
    },
    async deleteTask(id) {
      try {
        if (confirm('Are you sure')) {
          const res = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE'
          })
          if (res.status === 200) {
            this.tasks = this.tasks.filter((t) => t.id !== id)
          } else {
            console.log('Failed to remove todo')
          }
        }
      } catch (err) {
        console.log(err)
      }
    },

    async toggleTask(id) {
      const taskToToggle = await this.fetchTaskById(id)
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      console.log(data)
      this.tasks = this.tasks.map((t) => {
        if (t.id === id) {
          return data
        }
        return t
      })
    },

    async fetchTask() {
      try {
        const res = await fetch('http://localhost:3000/tasks')
        this.tasks = await res.json()
      } catch (err) {
        console.log(err)
      }
    },
    async fetchTaskById(id) {
      try {
        const res = await fetch(`http://localhost:3000/tasks/${id}`)
        return await res.json()
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    this.fetchTask()
  }
}
</script>
