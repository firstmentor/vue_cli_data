<template>

    <div class="post-details">
        <br>
        <div class="row mb-3">
            <div class="col-auto">
                <router-link class="btn btn-block btn-info" to="/">Go Back</router-link>
            </div>    

        </div>   
        <div class="card bg-dark mb-3">
            <div class="card-body">
                
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
        </div> 
        <PostComments />
    </div>
</template>

<script>
import PostComments from "@/views/PostComments.vue";

import axios from "axios";

export default {
    name : "PostDetails",
    data(){
        return{
            id: this.$route.params.id,  //url store
            post:[]
        }
    },

    created(){  //life cyele
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    .then(res => {
      
      this.post  = res.data
      

    })
    .catch(e => {
      this.errors.push(e);

    });


   },
  components: {
      PostComments,
  }
    

}
</script>

<style scoped>

</style>