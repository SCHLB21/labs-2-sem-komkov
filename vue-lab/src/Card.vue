<template>
<article class="work-card" :data_id="number-1" v-if="$store.state.cards.length!=0">
    <h3>Задача №{{number}}</h3>
    <p>{{description}}</p>
    <span v-if="date!=''">Дата и время начала</span>
    <p>{{date}}</p>
    <span v-if="status=='done'">Ушло времени</span>
    <p>{{end}}</p>
    <span v-if="status!='plan'">Ответственный</span>
    <p>{{name}}</p>
    <div class="control-buttons">
        <i class="far fa-edit"></i>
        <i class="far fa-check-circle" v-if="status=='plan'||status=='progress'" v-on:click="nextStage($event)"></i>
        <i class="far fa-times-circle" v-else v-on:click="nextStage($event)"></i>
    </div>
</article>
</template>

<script>
import moment from 'moment'
import humanizeDuration from 'humanize-duration'
export default {
    props:['number','description','date','name','status','end'],
    methods:{
        nextStage: function(e){
            if(this.status=='plan'){
                this.$store.state.cards[this.number-1].status='progress';
                this.$store.state.cards[this.number-1].date=moment().format('DD.MM.YYYY HH:mm:ss');
            }else if(this.status=='progress'){
                let a = moment(this.$store.state.cards[this.number-1].date, 'DD.MM.YYYY HH:mm:ss'); 
                let b = moment();
                let c =b.diff(a, 'milliseconds');
                this.$store.state.cards[this.number-1].status='done';
                this.$store.state.cards[this.number-1].date_end=humanizeDuration(c, {  round : true, language: 'ru', units: ['d', 'h','m'] });
            }else{
                this.$store.state.cards[this.number-1].status='end'
            }
        }
    }
}
</script>