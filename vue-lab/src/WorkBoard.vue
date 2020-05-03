<template>
    <div class="work-board">
        <section class="work-board__todo work-board__element">
            <h2>План</h2>
            <div v-for="(card, index) in cards">
                <task-card 
                v-if="card.status=='plan'"
                v-bind:number="index+1"
                v-bind:description="card.description"
                v-bind:date="card.date"
                v-bind:name="card.name"
                v-bind:status="card.status"></task-card>
            </div>
        </section>
        <!-- /.work-board__todo -->
        <section class="work-board__progress work-board__element">
            <h2>В работе</h2>
            <div v-for="(card, index) in cards">
                <task-card 
                v-if="card.status=='progress'"
                v-bind:number="card.id+1"
                v-bind:description="card.description"
                v-bind:date="card.date"
                v-bind:name="card.name"
                v-bind:status="card.status"></task-card>
            </div>
        </section>
        <!-- /.work-board__progress -->
        <section class="work-board__done work-board__element">
            <h2>Готово</h2>
            <div v-for="(card, index) in cards">
                <task-card 
                v-if="card.status=='done'"
                v-bind:number="card.id+1"
                v-bind:description="card.description"
                v-bind:date="card.date"
                v-bind:name="card.name"
                v-bind:status="card.status"></task-card>
            </div>
        </section>
        <!-- /.work-board__done -->
    </div>
        <!-- /.work-board -->
</template>
<script>
import taskCard from './Card.vue';
export default {
    data(){
      return{
        // cards: $store.state.cards
      }
    },
    computed: {
        cards() {
            return this.$store.state.cards
        }
    },
    components: {
      taskCard: taskCard
    }
}
</script>