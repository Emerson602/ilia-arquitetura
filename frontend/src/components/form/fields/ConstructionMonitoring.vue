<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
    <label class="fw-bold my-4">Precisa de acompanhamento de obra? *</label>

    <div class="form-check" v-for="followUp in [
        'Sim',
        'Não',
        'Projeto à distância',
        'Não tenho certeza, preciso de orientação',                     
    ]" :key="followUp">
        <input class="form-check-input" type="radio" :value="followUp" v-model="form.constructionMonitoring" required>
        <label class="form-check-label">{{ followUp }}</label>
    </div>
    </div> 
       
</template>
  
<script>
export default {
  name: 'constructionMonitoring',
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
