<template>
    <div>
        <h3>footer</h3>
        {{name}}
        <ul>
            <li v-for="a in myplaylist" v-bind:key="a">{{a}}</li>
        </ul> 
        {{simple}}
        <button v-on:click="update">update Message</button>
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
            type: String
        }

    },
    methods:{
        update: function(){
            this.simple ="pninfosys It Company gwalior"
        }
    }
    
}
</script>
<style scoped>

</style>