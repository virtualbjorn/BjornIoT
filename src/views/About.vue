<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <center>
        <img v-if="on"
          src="@/assets/simene.png"
         height = "400px" width = "300px"
        >
        
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <v-btn :loading="isLoading" flat red outline @click="login">Off</v-btn>
         
        </center>

        <v-card-title primary-title>
          <div>
            <div class="headline">AL Christian B Simene</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="blue" to="/home">To Do List</v-btn>
          
          <v-btn flat color="purple" to="/blogs">My Blog</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      },
      isLoading: false,
      islogin: false,
      error: "",
      userList: {
        MOD: {
          password: "sem",
          name: "Al"
        }
      }
    };
  },
  methods: {
    Led() {
      this.isLoading = true;
      if (
        this.credentials.username in this.userList &&
        this.credentials.password ===
          this.userList[this.credentials.username].password
      ) {
        console.log("user exit");
        setTimeout(() => {
          this.islogin = true;
          this.isLoading = false;
          setTimeout(() => {
            this.islogin = false;
            this.isLoading = false;
            this.$router.push("/About");
          }, 2000);
        }, 2000);
      } else {
        this.isLoading = false;
        this.error = "invalid username/password";
        console.log("not exist");
      }
    }
  }
};
</script>