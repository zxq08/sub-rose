<template>
  <div>
    <Header></Header>
    <todo-list></todo-list>
  </div>
</template>
<script type="text/javascript">
import Header from '../../components/common/header'
import todoList from '../todolist/TodoList'

export default {
  name: 'home',
  components: {
    Header,
    todoList
  }
}
</script>
<style lang="stylus" scoped>
</style>
