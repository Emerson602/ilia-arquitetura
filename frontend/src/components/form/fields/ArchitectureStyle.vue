<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
    <label class="fw-bold my-4">Qual estilo de arquitetura você mais gosta?</label>
    <input
        class="form-control"
        type="text"
        placeholder="Ex.: moderno, rústico, industrial, minimalista etc..."
        v-model="form.architectureStyle"
    >
    </div>
       
</template>
  
<script>
export default {
  name: 'architectureStyle',
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
