<template>
 <v-container>
 <v-dialog v-model="dialog">
  <v-card>
    <v-card-title>
       <span class="title">Title</span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      Hello
    </v-card-text>
    <v-card-action>
      <v-btn @click="dialog=false">hide me</v-btn>
    </v-card-action>
  </v-card>
 </v-dialog>
 <div>{{msg}}</div>
 <v-text-field v-model='mytodo'></v-text-field>
 <v-btn square color="black" outline @click="addToDo">Add</v-btn>
 <v-btn square color="black" outline @click="delToDo">Remove</v-btn>
 <div v-for="(todo, index) in todoList" :key="index">{{index+1}}.{{ todo}}</div>
 </v-container>

</template>

<script>
export default {
  data() {
    return {
      msg: "My To Do List",
      value: 0,
      dialog: false,
      todoList: [],
      mytodo: ""
    };
  },
  methods: {
    increment() {
      return this.value++;
    },
    addToDo() {
      this.todoList.push(this.mytodo);
    },
    delToDo() {
      this.todoList.pop();
    }
  }
};
</script>