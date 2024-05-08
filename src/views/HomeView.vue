<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <TodoForm />
    <TodoList />
  </main>
</template>

<style >
  main{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* gap: 10px; */
    align-items: center;
    align-content: flex-start;
    background-color: #F0EDCC;
  }
</style>
