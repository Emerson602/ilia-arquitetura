<template>  
         
      <div class="col-10 col-md-6 mt-4 text-start fs-5">
      <label class="fw-bold my-4">Esse projeto precisará de aprovação legal (prefeitura, condomínio etc.)? *</label>

      <div class="form-check" v-for="approval in ['Sim', 'Não']" :key="approval">
          <input class="form-check-input" type="radio" :value="approval" v-model="form.legalApproval" required>
          <label class="form-check-label">{{ approval }}</label>
      </div>
      </div>
       
</template>
  
<script>
export default {
  name: 'legalApproval',
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
