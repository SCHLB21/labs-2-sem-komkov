<template>
    <div class="work-board">
        <section class="work-board__todo work-board__element">
            <h2>План</h2>
                <div v-for="(card, index) in cards">
                    <draggable group="stat" @add="goPlan($event);">
                        <task-card 
                        v-if="card.status=='plan'"
                        v-bind:number="card.id+1"
                        v-bind:description="card.description"
                        v-bind:date="card.date"
                        v-bind:name="card.name"
                        v-bind:status="card.status"></task-card>
                    </draggable>
                </div>
        </section>
        <!-- /.work-board__todo -->
        <section class="work-board__progress work-board__element">
            <h2>В работе</h2>
                <div v-for="(card, index) in cards">
                    <draggable group="stat" @add="goProgress($event);">
                        <task-card 
                        v-if="card.status=='progress'"
                        v-bind:number="card.id+1"
                        v-bind:description="card.description"
                        v-bind:date="card.date"
                        v-bind:name="name"
                        v-bind:status="card.status"></task-card>
                    </draggable>
                </div>
        </section>
        <!-- /.work-board__progress -->
        <section class="work-board__done work-board__element">
            <h2>Готово</h2>
                <div v-for="(card, index) in cards">
                    <draggable group="stat" @add="goDone($event);">
                        <task-card 
                        v-if="card.status=='done'"
                        v-bind:number="card.id+1"
                        v-bind:description="card.description"
                        v-bind:date="card.date"
                        v-bind:name="name"
                        v-bind:status="card.status"
                        v-bind:end="card.date_end"></task-card>
                    </draggable>
                </div>
        </section>
        <!-- /.work-board__done -->
    </div>
        <!-- /.work-board -->
</template>
<script>
import taskCard from './Card.vue';
import draggable from 'vuedraggable';
import moment from 'moment'
import humanizeDuration from 'humanize-duration'
export default {
    data(){
      return{
        // cards: $store.state.cards
      }
    },
    methods: {
        goPlan: function(e){
            let a = e.target.getElementsByClassName("work-card");
            for (let i = 0; i < a.length; i++){
                let id = a[i].getAttribute('data_id')
                if(this.$store.state.cards[id].status!='plan'){
                    this.$store.state.cards[id].status='plan';
                    this.$store.state.cards[id].date='';
                    this.$store.state.cards[id].date_end='';
                    this.$store.state.cards[id].name='';
                }
            }
        },
        goProgress: function(e){
            let a = e.target.getElementsByClassName("work-card");
            for (let i = 0; i < a.length; i++){
                let id = a[i].getAttribute('data_id')
                if(this.$store.state.cards[id].status!='progress'){
                    if(this.$store.state.cards[id].status=='plan'){
                        this.$store.state.cards[id].status='progress';
                        this.$store.state.cards[id].date=moment().format('DD.MM.YYYY HH:mm:ss');
                        this.$store.state.cards[id].name=this.$store.state.name;
                    }else if(this.$store.state.cards[id].status=='done'){
                        this.$store.state.cards[id].status='progress';
                        this.$store.state.cards[id].date_end="";
                    }
                }
            }
        },
        goDone: function(e){
            let a = e.target.getElementsByClassName("work-card");
            for (let i = 0; i < a.length; i++){
                let id = a[i].getAttribute('data_id')
                if(this.$store.state.cards[id].status!='done'){
                    if(this.$store.state.cards[id].status=='plan'){
                        this.$store.state.cards[id].status='done'; 
                        this.$store.state.cards[id].date=moment().format('DD.MM.YYYY HH:mm:ss'); 
                        this.$store.state.cards[id].name=this.$store.state.name;
                        let k = moment(this.$store.state.cards[id].date, 'DD.MM.YYYY HH:mm:ss'); 
                        let h = moment();
                        let c =h.diff(k, 'milliseconds'); 
                        this.$store.state.cards[id].date_end=humanizeDuration(c, {  round : true, language: 'ru', units: ['d', 'h','m'] });
                    }else if(this.$store.state.cards[id].status=='progress'){
                        this.$store.state.cards[id].status='done'; 
                        let k = moment(this.$store.state.cards[id].date, 'DD.MM.YYYY HH:mm:ss'); 
                        let h = moment();
                        let c =h.diff(k, 'milliseconds');
                        this.$store.state.cards[id].date_end=humanizeDuration(c, {  round : true, language: 'ru', units: ['d', 'h','m'] });
                    }
                }
            }
        },
        checkMove: function(e){
            return false
        }
    },
    computed: {
        cards() {
            return this.$store.state.cards
        },
        cards1() {
            return this.$store.state.cards1
        },
        name() {
            return this.$store.state.name
        }
    },
    components: {
      taskCard: taskCard,
      draggable
    }
}
</script>