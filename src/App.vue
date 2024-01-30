<template>
  <div class="contianer">
    <CustomHeader title="Task Tracker" />
    <TaskList :tasks="tasks" />
  </div>
</template>
<script>
import CustomHeader from './components/CustomHeader.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: { CustomHeader, TaskList },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Learn Vue',
        day: 'March 3rd at 1:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Revise Golang',
        day: 'March 4th at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Do Project',
        day: 'March 5th at 1:30pm',
        reminder: true
      },
      {
        id: 4,
        text: 'Dance',
        day: 'March 5th at 1:30pm',
        reminder: false
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
