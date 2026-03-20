<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
    <label class="fw-bold my-4">Possui alguma referência ou inspiração específica?</label>
    <textarea
        class="form-control"
        rows="3"
        placeholder="Se sim, pode enviar links ou referências visuais."
        v-model="form.references"
    ></textarea>
    </div>
       
</template>
  
<script>
export default {
  name: 'references',
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
