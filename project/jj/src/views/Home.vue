<template>
  <div class="home">
    <br>
    <AddPost v-on:add-post="addPost"/>
    <PostList v-on:del-post="deletePost" v-bind:posts="posts"/>
    
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import AddPost from "@/views/AddPost.vue";
import PostList from "@/views/PostList.vue";


export default {
  name: 'Home',
  components: {
    AddPost,
    PostList
    
  },
  data(){
    return {
      posts :[],  //jo responce ayega ushe data mai store karna hoag
      errors: [] //error ko store
    }

  },
  methods :{
    // deletePost(id){
    //   axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   // .then(res => {
    //   //   this.posts =this.posts.filter(post =>post.id !==id)
    //   })
    //   .catch(err =>{
    //     console.log(err);
    //   })
    // },
    addPost(newPost){
      const { title, body } =newPost;
      axios.post("https://jsonplaceholder.typicode.com/posts",{
        title,
        body
      })
        .then(res=>(this.posts =[...this.posts, res.data]))
        .catch(err => console.log(err));
    },
    

  },
  created(){  //life cyele
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      
      this.posts = res.data
      

    })
    .catch(e => {
      this.errors.push(e);

    });


  }
}
</script>
