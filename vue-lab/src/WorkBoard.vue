<template>
    <div class="work-board">
        <section class="work-board__todo work-board__element">
            <h2>План</h2>
            <task-card></task-card>
        </section>
        <!-- /.work-board__todo -->
        <section class="work-board__progress work-board__element">
            <h2>В работе</h2>
        </section>
        <!-- /.work-board__progress -->
        <section class="work-board__done work-board__element">
            <h2>Готово</h2>
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
        
      }
    },
    components: {
      taskCard: taskCard
    }
}
</script>