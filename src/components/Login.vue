<template>
  
    <div class="card">
   <div class="container">
     <div id="login"><br>
        <h3 align="center">LOGIN</h3><br><br>
       <!-- <input class="link-input" type="text" placeholder="name" v-model="loginUser.userName" />
       <br><br>
       <input class="link-input" type="text" placeholder="password" v-model="loginUser.password" /><br><br><br> -->
        <div class="form-group">
          <label for="username">username</label>
        <input type="text" name="username" v-model="loginUser.username" placeholder="Username" />
        </div><br>
        <div class="form-group">
          <label for="password">password</label>
        <input type="password" name="password" v-model="loginUser.password" placeholder="Password" />
       </div><br>
       <div  >
       <button v-on:click="login()" align="center" class="btn">login</button> 
       </div>
  </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'login',
 
  computed:{
          loginUser(){
              return this.$store.state.loginUser;
          },
          getter(){
              return this.$store.getters.getLoginUser;
          },
         
  },
  methods:{
    
    login(){
              //return this.$store.actions.loginUser;
              // this.$router.push({'path': '/SignUp'})
               this.$store.dispatch('LoginUser')
                //window.location.href = '/SignUp';
          }
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 400px;
  height:300px;
  margin-left:500px;
  margin-top:100px;
  background-color:#D3D3D3;
 
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
 
}

.container {
  padding: 2px 16px;
  
}

 .btn{
  width: 20%;
  height: 30px;
 
  }
</style>
