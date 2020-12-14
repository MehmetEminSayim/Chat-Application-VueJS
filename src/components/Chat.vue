<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>Chat Application - {{name}} -</h4>
      </div>
      <br>
      <div class="card-content">
        <ul class="list-group">
          <li class="list-group-item" v-for="item in even(resultMessages)">
            <div class="row">
              <div class="col-md-9">
                <span class=""><span class="text-danger text-center">{{item.name}}</span> : {{item.message}}</span><br>
                <span class="text-success name">By :{{item.name}}</span>

              </div>
              <div class="col-md-3">
                <span class="text-center text-secondary time">({{item.date |moment("dddd, MMMM h:mm:ss a")}})</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="card-action mt-2">
        <app-new-message :name="name"></app-new-message>
      </div>
    </div>
  </div>
</template>

<script>

import NewMessage from "./NewMessage"
import db from "../firebase"
import moment from "vue-moment"
import axios from "axios"
  export default {
    data(){
      return {
        resultMessages : [],
      }
    },
    components : {
      appNewMessage : NewMessage
    },
    methods : {
      even: function(arr) {
        // Set slice() to avoid to generate an infinite loop!
        return arr.slice().sort(function(a, b) {
          return a.date - b.date;
        });
      }

    },
    created() {
     let ref = db.collection("message")
      ref.onSnapshot(snap =>{
        snap.docChanges().forEach(c => {
          if (c.type =="added"){
            let doc = c.doc
            this.resultMessages.push({
              id : doc.id,
              message : doc.data().message,
              name : doc.data().name,
              date: doc.data().date
            })
          }
        })
      })
    },
    props : ['name'],
  }
</script>

<style scoped>
.card {
  margin: auto;
}
.time{
  font-size: 9px;
}
.name{
  font-size: 12px;
}
</style>

