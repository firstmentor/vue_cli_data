<template>
    <div>
        <h3>Content</h3>
        <ul>
            <li v-for="a in myplaylist" v-bind:key="a">{{a}}</li>
        </ul>

        <button v-on:click="deletestudent">Delete Student</button>
        <br>
        {{simple}}
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type :String
        },
        myplaylist:{
            type: Array
        },
        simple:{
            type :String
        },
    },
    methods:{
        deletestudent: function(){
            this.myplaylist.pop();
        }
    }
    
}
</script>
<style scoped>

</style>