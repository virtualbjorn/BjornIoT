<template>
<v-container grid-list-md text-xs-center>
        <v-card width="500  ">
            <v-card-text>        
            <v-text-field required
                        placeholder="Enter Username" 
                        label="Username"  
                        :error-messages="error"

                        v-model="credentials.username">
            </v-text-field>   

            <v-text-field required
                        :error-messages="error"
                        placeholder="Enter Password" 
                        label="Password" 
                        
                        v-model="credentials.password" 
                        type="password">
            </v-text-field>

            </v-card-text>
            
            <v-card-actions>
                <v-spacer></v-spacer>     
                <v-btn :loading="isLoading" flat red outline @click="login">Login</v-btn>
                </v-card-actions>
        </v-card>
      </v-container>
</template>


<script>
export default{
    data() {
        return{
                credentials:{
                    username:"",
                    password:""
                },
                isLoading: false,
                islogin:false,
                error: '',
                userList:{
                    "MOD":{
                        password: "sem",
                        name: "Al"
                    }
                }
                
            };
    },
    methods:{
        login (){
            this.isLoading=true
        if (this.credentials.username in this.userList && this.credentials.password === this.userList[this.credentials.username].password) {
            console.log('user exit')
            setTimeout(()=>{
                this.islogin=true
                this.isLoading=false
                setTimeout(()=>{
                    this.islogin=false
                    this.isLoading=false
                    this.$router.push('/About')
                }, 2000)
            }, 2000)
        }else{
            this.isLoading=false
            this.error="invalid username/password"
            console.log('not exist')
        }
        }
        }
    };
</script>