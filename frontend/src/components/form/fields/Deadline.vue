<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
    <label class="fw-bold my-4">Qual o prazo desejado para a conclusão do projeto? *</label>

    <div class="form-check" v-for="time in [
        'Urgente (menos de 1 mês)',
        '1 a 3 meses',
        '3 a 6 meses',
        'Acima de 6 meses',
        'Ainda estou planejando',                     
    ]" :key="time">
        <input class="form-check-input" type="radio" :value="time" v-model="form.deadline" required>
        <label class="form-check-label">{{ time }}</label>
    </div>
    </div> 
       
</template>
  
<script>
export default {
  name: 'deadline',
  props: {
    form: {
      type: Object,
      required: true
    }
  }
}
</script>
   
<style scoped> 


</style>
