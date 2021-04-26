<template>
    <div>
        <input type="text" v-model="newTodoItem"/>
        <button @click="addNewTodoItem()">Submit</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newTodoItem:''
        };
    },
    methods:{
        addNewTodoItem(){
            this.$store.dispatch('addNewTodoItem', this.newTodoItem);
            this.newTodoItem = null
        }
    }
};
</script>