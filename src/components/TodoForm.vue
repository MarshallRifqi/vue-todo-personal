<template>
  <div class="container">
    <div class="heading-form">
      <h2>My todo</h2>
    </div>
    <form action="" @submit.prevent="addItemAndClear(todo)">
      <div class="form-wrapper">
        <label for="">What is your plan?
        </label>
        <textarea rows="4" cols="50" type="text" v-model="todo" maxlength="200"> </textarea>
        <button>Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTodoListStore } from '@/stores/counter';
export default{
  setup(){
    const todo = ref("")
    const store = useTodoListStore()
    const addItemAndClear = (item) => {
      if (item.length === 0) {
        return
      }
      // invokes function in the store:
      store.addTodo(item)
      todo.value = ''
    }
    return {todo, addItemAndClear};
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .container{
    width: 1140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
  }
  .form-wrapper{
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    /* width: 50%; */
    /* padding: 5px; */
  }
  .heading-form{
    /* border: 1px solid black; */
    /* width: 50%; */
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  label{
    /* border: 1px solid black; */
    font-size: .8rem;
    color: #888;
    margin-bottom: 3px;
  }
  textarea{
    border: 1px solid #02343F;
    border-radius: 6px;
    color: #02343F;
    margin-bottom: 10px;
    background-color: transparent;
  }
  button{
    /* background-color: black; */
    /* color: white; */
    padding: 10px;
    border: 1px solid black;
    /* border: hidden; */
    border-radius: 5px;
    background-color: #02343F;
    color: #F0EDCC;
    margin-bottom: 10px;
  }
  button:hover{
    border-radius: 3px;
    /* background-color: black; */
    /* color: white; */
    /* padding: 10px; */
    border: 1px solid black;
    /* border: hidden; */
    background-color: transparent;
    color: #02343F;
    margin-bottom: 10px;
    transform: scale(1, 1.1);
    transition: all .3s ease-out;
  }
</style>