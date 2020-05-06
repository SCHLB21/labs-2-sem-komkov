<template>
  <div :class="dark">
    <modal-name></modal-name>
    <header>
        <div class="header-wrap container">
            <div class="header__logo">
              <h1>Канбан</h1>
            </div>
            <!-- /.header__logo -->
            <div class="header__theme">
              <span>Темная тема</span>
              <toggle-button v-model="theme" @change="changeTheme();" :value="false" :labels="{checked: 'ON', unchecked: 'OFF'}" :width="70" :height="33" :color="{checked: '#070C11', unchecked: '#BCE0FD'}" :font-size="10"/>
            </div>
            <!-- /.header__theme -->
        </div>
      </header>
      <main>
        <add-card></add-card>
        <work-board></work-board>
      </main>
      <modal-edit></modal-edit>
  </div>
</template>
<script>
  import taskCard from './Card.vue';
  import addCard from './AddCard.vue';
  import WorkBoard from './WorkBoard.vue';
  import ModalName from './ModalName.vue';
  import ModalEdit from './ModalEdit.vue';
  export default {
    data(){
      return{
        theme: false,
        dark: ''
      }
    },
    methods:{
      changeTheme: function(e){
        console.log(this.theme)
        this.$store.state.theme=this.theme
        this.$store.state.dark=""
        this.$store.state.dark_card=""
        this.dark = ""
        if(this.theme){
          this.dark = "dark"
          this.$store.state.dark="dark"
          this.$store.state.dark_card="work-card__dark"
        }
      }
    },
    components: {
      taskCard: taskCard,
      addCard: addCard,
      WorkBoard: WorkBoard,
      ModalName: ModalName,
      ModalEdit: ModalEdit
    }
  }
</script>
<style lang="sass">
@import '../sass/style.sass';
.dark 
  background: #24292E
</style>

