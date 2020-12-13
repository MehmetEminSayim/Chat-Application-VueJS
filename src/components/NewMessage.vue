<template>
  <div class="container">
      <div class="form-group">
        <label for="addMessage">Yeni Mesaj</label>
        <input type="text" class="form-control" @keypress.enter="addMessage" v-model="newMessage">
        <p class="text-danger" v-if="feedback">{{feedback}}</p><br>
        <button @click="addMessage" class="btn btn-success">Gönder</button>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import db from "../firebase"
  export default {
    props : ['name'],
    data(){
      return {
        newMessage : null,
        feedback  : null,
        counter : 0,
      }
    },
    methods : {
      addMessage(){
        if (this.newMessage){
          db.collection("message").add({
            message : this.newMessage,
            name: this.name,
            date : Date.now(),
          }).catch(err => {
            console.log(err)
          })
          this.feedback = null;
          this.newMessage = null;
        }else{
          this.feedback = "Lütfen bir mesaj içeriği oluşturunuz"
        }
      }
    }
  }
</script>
