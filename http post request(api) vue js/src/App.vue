<template>
<div>
   <showBlogs></showBlogs>
  
  <h2>HTTP REQUEST SEND DATA (API)</h2>
  <form name="blog_form" method="post">
    <p>
      <label>Title:</label>
      <input type="text" placeholder="Enter name" v-model= "blog.title" >
    </p> 
    <p>
      <label>Body:</label>
      <input type="text" placeholder="Enter email"  v-model.lazy= "blog.description" >
    </p>  
    <p>
      <button v-on:click.prevent="postBlog">Submit </button>
    </p>   
    

  </form>
  <div id="details-preview">
    <h3>Blog Details Preview</h3>
    <p>Title : {{blog.title}} </p>
    <p>Designation : {{blog.description}}</p>
   
     
  </div>  
  
</div>  

 
</template>

<script>
import showBlogs from './components/showBlogs.vue'




export default {
  components: {
    showBlogs
    
   
    
    
  },
  
  data () {
     return {
       blog: {
         title :"",
         description :"",
         user:""
       }, 
         

       
       
       
     }
  },
  methods:{
    postBlog: function(){

      this.$http.post("https://jsonplaceholder.typicode.com/posts",{
        //post data section
        title: this.blog.title,
        body:this.blog.description,
        userId:this.blog.user

      }).then(function(data){
        //response section
        console.log(data);

      });
    }
   
     
  },
  
}
</script>

<style>


</style>
