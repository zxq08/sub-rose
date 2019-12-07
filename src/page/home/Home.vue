<template>
  <div class="home-wrap">
    <home-header></home-header>
    <todo-list></todo-list>
  </div>
</template>
<script type="text/javascript">
import HomeHeader from '../../components/common/header'
import todoList from './components/TodoList'

export default {
  name: 'home',
  components: {
    HomeHeader,
    todoList
  }
}
</script>
<style lang="stylus" scoped>
</style>
