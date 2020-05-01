<template>
  <div>
    <header>
        <div class="header-wrap container">
            <div class="header__logo">
              <h1>Канбан</h1>
            </div>
            <!-- /.header__logo -->
            <div class="header__theme">
              <span>Темная тема</span>
              <toggle-button :value="false" :labels="{checked: 'ON', unchecked: 'OFF'}" :width="70" :height="33" :color="{checked: '#2F3136', unchecked: '#BCE0FD'}" :font-size="12"/>
            </div>
            <!-- /.header__theme -->
        </div>
      </header>
      <main>
        <add-card></add-card>
      </main>
  </div>
</template>
<script>
  import taskCard from './Card.vue';
  import addCard from './AddCard.vue';
  export default {
    components: {
      taskCard: taskCard,
      addCard: addCard
    }
  }
</script>
<style lang="sass">
@import '../sass/style.sass';
</style>

