<script>
import { useTodoListStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { computed } from 'vue';
export default {
  setup() {
    const store = useTodoListStore();
    const totalCompletedTodos = computed(() => store.totalCompletedTodos);
    // storeToRefs lets todoList keep reactivity:
    const { todoList } = storeToRefs(store);
    const {toggleCompleted, deleteTodo, editTodo, } = store
    const saveEdit = (todo) => {
      // Jika todo item tidak kosong, simpan perubahan
      if (todo.editText.trim() !== "") {
        todo.item = todo.editText;
        todo.isEditing = false; // Menutup mode editing
        editTodo(todo.id, todo.item); // Panggil fungsi editTodo dari store
      } else {
        // Jika todo item kosong, reset ke teks sebelumnya
        todo.editText = todo.item;
        todo.isEditing = false; // Menutup mode editing
      }
    };
    return { todoList, toggleCompleted, deleteTodo, editTodo, saveEdit,totalCompletedTodos  };
  },
};

</script>

<template>
      <p>Total todo yang belum selesai: {{ totalCompletedTodos }}</p>
  <div v-for="todo in todoList" :key="todo.id" class="container">
    <div class="note-wrapper">
      <!-- <p :class="{completed: todo.completed}">{{ todo.item }}</p> -->
      <!-- <p>{{ store.oddOrEven }}</p> -->
      <template v-if="!todo.isEditing">
        <p :class="{ completed: todo.completed }">{{ todo.item }}</p>
      </template>
      <template v-else>
        <input v-model.trim="todo.editText" @keyup.enter="saveEdit(todo)" @blur="saveEdit(todo)" class="edit-input" />
      </template>
    </div>
    <div class="button-wrapper">
      <button v-if="!todo.isEditing" @click.stop="todo.isEditing = true" class="check-button">Edit &#9998;</button>
      <button v-else @click.stop="saveEdit(todo)" class="check-button">Save &#10004;</button>
      <!-- <button @click="deleteTodo(todo.id)" class="check-button">Delete &#10060;</button> -->
      <button @click.stop="toggleCompleted(todo.id)" class="check-button">Check &#10004;</button>
      <button @click="deleteTodo(todo.id)" class="check-button">Delete &#10060;</button>
    </div>
  </div>
</template>

<style scoped>

.completed {
  text-decoration: line-through;
  /* background-color: white; */
  cursor: pointer;
}

.check-button{
  /* margin-left: 10px; */
  cursor: pointer;
}

/* .list-wrapper{
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
} */

.container{
  /* border: 1px solid black; */
  /* list */
  display: flex;
  padding: 10px;
  /* justify-content: space-between; */
  gap: 10px;
  /* box-sizing: border-box; */
  width: 1140px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.note-wrapper{
  /* border: 1px solid black; */
  padding: 10px;  
  width: 50%;
  height: 100px;
  overflow:auto;
  background-color: #02343F;
  color: #F0EDCC;
  border-radius: 5px;
}
.button-wrapper{
  gap: 10px;
  /* border: 1px solid black; */
  display: flex;
  padding: 10px;
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