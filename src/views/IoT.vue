<template>
 <v-container>
    <v-btn square color="black" outline @click="livingRoomSwitch(isLivingRoom)">Living Room Switch</v-btn>
    <div>{{isLivingRoom}}</div>
    <v-btn square color="black" outline @click="fetchDatabase()">Fetch Database</v-btn>
    <div>{{timeStamps}}</div>
 </v-container>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isLivingRoom: false,
      timeStamps: {}
    };
  },
  methods: {
    livingRoomSwitch(mode) {
      this.isLivingRoom = !this.isLivingRoom;
      if (this.isLivingRoom) {
        axios.get("http://192.168.43.202:8080/livingRoomSwitch/On");
      } else {
        axios.get("http://192.168.43.202:8080/livingRoomSwitch/Off");
      }
    },
    async fetchDatabase() {
        this.timeStamps = (await axios.get("http://192.168.43.202:8080/fetchDatabase")).data
        console.log(this.timeStamps)
    }
  }
};
</script>