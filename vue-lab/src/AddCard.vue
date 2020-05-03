<template>
    <div class="add-card container">
        <span>Добавить новую задачу</span>
        <div class="add-card__field">
            <input v-model="description" type="text" placeholder="Описание">
            <button v-on:click="createCard($event)">+</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
        description:'',
        card:null
      }
    },
    methods: {
        createCard: function(event){
            event.preventDefault();
            this.description="";
        }
    }
}
</script>