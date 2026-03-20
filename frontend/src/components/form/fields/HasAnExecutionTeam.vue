<template>  
         
      <div class="col-10 col-md-6 mt-4 text-start fs-5">
      <label class="fw-bold my-4">Já possui equipe de execução da obra? *</label>

      <div class="form-check" v-for="execution in [
          'Sim, já tenho uma equipe contratada',
          'Não, gostaria de indicações',
          'Ainda estou avaliando',                  
      ]" :key="execution">
          <input class="form-check-input" type="radio" :value="execution" v-model="form.hasAnExecutionTeam" required>
          <label class="form-check-label">{{ execution }}</label>
      </div>
      </div> 
       
</template>
  
<script>
export default {
  name: 'hasAnExecutionTeam',
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
