<template>
  <div class="modal-edit__bg" v-if="$store.state.edit.state">
        <div class="modal-edit__window" :class="$store.state.dark">
          <i class="fas fa-times-circle close" v-on:click="closeModal($event);"></i>
          <div class="modal-edit__description">
            <span>Описание</span>
            <input v-model="description" type="text" placeholder="Описание">
          </div>
          <div class="modal-edit__status">
            <span>Статус</span>
            <select v-model="status" name="status">
                <option disabled value="">Укажите статус</option>
                <option value="plan">План</option>
                <option value="progress">В работе</option>
                <option value="done">Готово</option>
            </select>
          </div>
          <div class="modal-edit__name" v-if="status=='done'|| status=='progress'">
            <span>Ответственный</span>
            <input v-model="name" type="text" placeholder="Введите имя">
          </div>
          <div class="modal-edit__date-start" v-if="status=='done'|| status=='progress'">
            <span>Дата и время начала</span>
            <input v-model="date" type="text" placeholder="Введите дату">
          </div>
          <div class="modal-edit__date-end" v-if="status=='done'">
            <span>Дата и время завершения</span>
            <input v-model="date_end" type="text" placeholder="Введите дату">
          </div>
          <button v-on:click="sendChanges($event);"><i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import humanizeDuration from 'humanize-duration'
export default {
  data(){
      return{
          status: '',
          description: '',
          name: '',
          date: '',
          date_end: ''

      }
  },
  methods: {
    sendChanges: function(e){
      let a = moment(this.date, 'DD.MM.YYYY HH:mm:ss'); 
      let b = moment(this.date_end, 'DD.MM.YYYY HH:mm:ss');
      let c =b.diff(a, 'milliseconds');
      this.$store.state.edit.state=false;
      this.$store.state.cards[this.$store.state.edit.id].status=this.status;
      this.$store.state.cards[this.$store.state.edit.id].description=this.description;
      this.$store.state.cards[this.$store.state.edit.id].name = this.name;
      if(this.date=='' && this.status!='plan'){
        this.$store.state.cards[this.$store.state.edit.id].date='Не указана'
      }else{
        this.$store.state.cards[this.$store.state.edit.id].date = this.date;
      }
      this.$store.state.cards[this.$store.state.edit.id].date_end = humanizeDuration(c, {  round : true, language: 'ru', units: ['d', 'h','m'] });
      e.preventDefault();
      this.status=''; 
      this.description=''; 
      this.name=''; 
      this.date='';
      this.date_end='';
    },
    closeModal: function(e){
      this.$store.state.edit.state=false;
      e.preventDefault();
      this.status=''; 
      this.description=''; 
      this.name=''; 
      this.date='';
      this.date_end='';
    }
  },
}
</script>

<style>

</style>