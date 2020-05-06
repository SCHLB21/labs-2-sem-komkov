<template>
<article class="work-card" :class="$store.state.dark_card" :data_id="number-1" v-if="$store.state.cards.length!=0">
    <h3>Задача №{{number}}</h3>
    <p>{{description}}</p>
    <span v-if="date!=''">Дата и время начала</span>
    <p>{{date}}</p>
    <span v-if="status=='done'">Ушло времени</span>
    <p>{{end}}</p>
    <span v-if="status!='plan'">Ответственный</span>
    <p v-if="status!='plan'">{{name}}</p>
    <div class="control-buttons">
        <i class="far fa-edit" v-on:click="openModal($event);"></i>
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
        },
        openModal: function(e){
            this.$store.state.edit.state=true;
            this.$store.state.edit.id=this.number-1;
            this.$store.state.edit.description=this.description;
            this.$store.state.edit.date = this.date;
            this.$store.state.edit.date_end = this.end;
            this.$store.state.edit.name = this.name;
            this.$store.state.edit.status = this.status;
        }
    }
}
</script>