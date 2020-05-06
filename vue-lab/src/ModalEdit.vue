<template>
  <div class="modal-edit__bg" v-if="$store.state.edit.state">
        <div class="modal-edit__window">
          <div class="modal-edit__description">
            <span>Описание</span>
            <input type="text" placeholder="Описание">
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
            <input type="text" placeholder="Введите имя">
          </div>
          <div class="modal-edit__date-start" v-if="status=='done'|| status=='progress'">
            <span>Дата и время начала</span>
            <input type="text" placeholder="Введите дату">
          </div>
          <div class="modal-edit__date-end" v-if="status=='done'">
            <span>Дата и время завершения</span>
            <input type="text" placeholder="Введите дату">
          </div>
          <button><i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
export default {
 data(){
      return{
          status: '',
          fdd: false
      }
    }
}
</script>

<style>

</style>