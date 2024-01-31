<template>
  <form @submit="handleSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
      {{ text }}
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input type="text" v-model="day" name="day" placeholder="Add Day & Time" />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input v-model="reminder" type="checkbox" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
const defaultTask = {
  text: '',
  day: '',
  reminder: false
}
export default {
  name: 'AddTask',
  data() {
    return {
      ...defaultTask
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      if (!this.text) {
        alert('Please input a task')
        return
      }
      const newTask = {
        text: this.text,
        reminder: this.reminder,
        day: this.day
      }

      this.$emit('add-task', newTask)

      this.text = defaultTask.text
      this.day = defaultTask.day
      this.reminder = defaultTask.reminder
    }
  }
}
</script>

<style>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
