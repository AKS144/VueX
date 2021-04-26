<template>
    <div>
        <!--<Todo v-for="(todo, index) in $store.state.todos" :key="index"/> 1st and 2nd way computed-->
        <Todo v-for="(todo, index) in todos" :key="index" :todo="todo"/><!--:todo is a props-->
    </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from './Todo';//parent component
export default {
    components:{
        Todo,//child component
    },

    computed:{
        /*todos(){//fetch todos items
            return this.$store.state.todos;
        }*/

        ...mapState({
            todos:'todos'
        })

    }
}
</script>

<style>

</style>