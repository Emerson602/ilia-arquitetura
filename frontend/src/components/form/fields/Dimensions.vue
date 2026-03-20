<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
    <label class="fw-bold my-4">Quais as medidas gerais do ambiente? </label>
    <input
        class="form-control"
        type="text"
        placeholder="Ex: 5m x 3m"
        v-model="form.dimensions"
        required
    >
    </div>
       
</template>
  
<script>
export default {
  name: 'dimensions',
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
