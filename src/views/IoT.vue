<template>
 <v-container>
    <v-btn square color="orange" @click="livingRoomSwitch()">Living Room Switch</v-btn>
    <v-btn square color="blue" @click="fetchDatabase()">Fetch Database</v-btn>
    <table id="firstTable" v-if="database.length > 0">
      <thead>
        <tr>
          <th>Time Stamp</th>
          <th>PIR Module</th>
          <th>Living Room</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in database" :key="index">
          <td>{{data.timeStamp}}</td>
          <td>{{data.pirModule}}</td>
          <td>{{data.livingRoomSwitch}}</td>
        </tr>
      </tbody>
    </table>
 </v-container>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      serverIp: '192.168.1.13',
      isLivingRoom: false,
      database: [],
      databaseModel: {
        timeStamp: "",
        pirModule: 0,
        livingRoomSwitch: 0
      },
      lastRowData: {}
    };
  },
  mounted() {
    this.fetchDatabase()
  },
  methods: {
    livingRoomSwitch() {
      this.isLivingRoom = !this.isLivingRoom;
      if(this.isLivingRoom) {
        axios.get(`http://${this.serverIp}:8080/livingRoomSwitch/On`)
      } else {
        axios.get(`http://${this.serverIp}:8080/livingRoomSwitch/Off`)
      }
    },
    async fetchDatabase() {
      this.database = [];
      let response = (await axios.get(
        `http://${this.serverIp}:8080/fetchDatabase`
      )).data;
      response.forEach(data => {
        this.databaseModel.timeStamp = data[0]
        this.databaseModel.pirModule = data[1]
        this.databaseModel.livingRoomSwitch = data[2]
        this.database.push(this.databaseModel)
        this.lastRowData = this.databaseModel
        this.databaseModel = {}
      });
    }
  }
};
</script>
<style scoped>
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
