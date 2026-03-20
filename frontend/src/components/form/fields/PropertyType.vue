<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
        <label class="fw-bold my-4">Qual é o tipo de imóvel/espaço? *</label>
        <input
            class="form-control"
            type="text"
            placeholder="Ex.: casa, apartamento, sala comercial, loja etc."
            v-model="form.propertyType"
            required
        >
    </div>
       
</template>
  
<script>
export default {
  name: 'propertyType',
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
