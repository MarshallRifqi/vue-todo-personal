// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item){
      this.todoList.push({item, id: this.id++, completed: false})
    },
    deleteTodo(itemID){
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID
      })
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo(itemId, newText) {
      const todo = this.todoList.find((todo) => todo.id === itemId);
      if (todo) {
        todo.item = newText;
      }
    },
  }, 
  getters: {
    totalCompletedTodos: (state) => {
      return state.todoList.filter((todo) => todo.completed).length ;
    }, 
    // totalUncompletedTodos: (state) => state.todoList.filter((todo) => !todo.completed).length,
  }
})
// // Getter untuk mendapatkan todo list yang belum selesai
// incompleteTodos(state) {
//   return state.todoList.filter(todo => !todo.completed);
// },
// // Getter untuk mendapatkan todo list yang sudah selesai
// completedTodos(state) {
//   return state.todoList.filter(todo => todo.completed);
// },
// // Getter untuk menghitung jumlah total todo
// totalTodos(state) {
//   return state.todoList.length;
// }
// totalItemCount(state) {
//   return state.todoList.reduce((total, todo) => total + todo.item.length, 0);
// }