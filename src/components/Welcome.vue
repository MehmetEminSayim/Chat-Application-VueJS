<template>
  <div class="container">
    <div class="card shadow card-style">
      <div class="card-header text-center">
        <h4 class="text-warning"> Chat Application</h4>
      </div>
      <div class="card-body">
        <p class="text-success text-center">Lütfen Bilgilerini Giriniz</p>

         <div class="form-group">
           <input class="form-control" type="text" v-model="name" placeholder="Kullanıcı adı size özeldir...">
         </div>
         <br>
         <div class="form-group mt-2">
           <input class="form-control" type="password" v-model="password" placeholder="Oda Parolasını giriniz...">
         </div>
        <br>
        <p v-if="feedback" class="text-danger">{{feedback}}</p>
        <br>
        <div class=" text-center">
            <button class="btn btn-primary" @click="enterChat">Odaya Katıl</button>
        </div>
      </div>
    </div>
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase"
import axios from "axios";
  export default {
    data(){
      return {
        name : null,
        feedback : null,
        firePassword : null,
        password : null,
        saveButtonClick : false
      }
    },
    computed : {
      isLoading(){
        if (this.saveButtonClick){
          return {
            display  : "block"
          }
        }else{
          return { display: "none" }
        }
      }
    },
    methods : {
      enterChat(){
        this.saveButtonClick = true;
        db.collection('users')
          .get()
          .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => doc.data())
            console.log(documents[0].name)
            this.fireUser = documents[0].name
            this.firePassword = documents[0].password
          })

          setTimeout(() => {
            if (this.password == this.firePassword){
              this.$router.push({name : "chatpage", params : {name : this.name}})
            }else {
              this.feedback = "Lütfen oda bilgilerini doğru bir biçimde giriniz."
              this.saveButtonClick =false
            }
          },3000)

      }
    }
  }
</script>

<style scoped>
  .card-style {

    margin: auto;

  }
</style>
