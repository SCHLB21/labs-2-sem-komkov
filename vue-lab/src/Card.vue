<template>
<article class="work-card" v-if="$store.state.cards.length!=0">
    <h3>Задача №{{number}}</h3>
    <p>{{description}}</p>
    <span v-if="date!=''">Дата и время начала</span>
    <p>{{date}}</p>
    <span v-if="name!=''">Ответственный</span>
    <p>{{name}}</p>
    <div class="control-buttons">
        <i class="far fa-edit"></i>
        <i class="far fa-check-circle" v-if="status=='plan'||status=='progress'" v-on:click="nextStage($event)"></i>
        <i class="far fa-times-circle" v-else v-on:click="nextStage($event)"></i>
    </div>
</article>
</template>

<script>
export default {
    props:['number','description','date','name','status'],
    methods:{
        nextStage: function(e){
            if(this.status=='plan'){
                this.$store.state.cards[this.number-1].status='progress';
                this.$store.state.cards[this.number-1].date=new Date();
            }else if(this.status=='progress'){
                this.$store.state.cards[this.number-1].status='done';
            }else{
                this.$store.state.cards[this.number-1].status='end'
            }
        }
    }
}
</script>