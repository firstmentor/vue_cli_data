<template>
<div>
    <h2>Lasting Blogs</h2>
    <div v-for="blog in blogs" v-bind:key=blog>
        <h3>{{blog.title | makeUppercase }}</h3>
        <p>{{blog.body | contentSnippet}}</p>
    </div>    
</div>    
    
</template>

<script>
export default {
    data(){
        return{
            blogs:[]
        }
    },

created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
        console.log(data);
        this.blogs =data.body.slice(0,5);
    });
},
filters:{
    makeUppercase:function(value){
        return value.toUpperCase();
    },
    contentSnippet:function(value){
        return value.slice(0, 70);
    }
}
    
}
</script>

<style scoped>

</style>