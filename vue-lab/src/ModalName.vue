<template>
  <div class="modal-name__bg" v-if="modal">
      <div class="modal-name__window" :class="$store.state.dark">
        <span>Имя</span>
        <div class="modal-name__field">
            <input v-model="name" type="text" placeholder="Введите имя">
            <button v-on:click="getName($event);"><i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
data(){
      return{
        name: '',
        modal: true,
        dark: 'dark'
      }
    },
    methods: {
      getName: function(e){
        this.$store.state.name = this.name;
        event.preventDefault();
        this.modal = false;
      }
    }
}
</script>

<style>

</style>