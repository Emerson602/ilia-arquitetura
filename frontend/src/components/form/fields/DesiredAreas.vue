<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
      <label class="fw-bold my-4">Para quais ambientes deseja o projeto? *</label>
      <input
          class="form-control"
          type="text"
          placeholder="Ex.: cozinha, quarto, fachada, lote, quadra etc."
          v-model="form.desiredAreas"
          required
      >
    </div>
       
</template>
  
<script>
export default {
  name: 'desiredAreas',
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
