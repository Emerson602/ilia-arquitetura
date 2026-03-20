<template>  
         
    <div class="col-10 col-md-6 mt-4 text-start fs-5">
        <label class="fw-bold my-4">Deseja projeto de iluminação/luminotécnica? *</label>

        <div class="form-check" v-for="option in ['Sim', 'Não', 'Talvez']" :key="option">
            <input class="form-check-input" type="radio" :value="option" v-model="form.lightingProject" required>
            <label class="form-check-label">{{ option }}</label>
        </div>
    </div>
       
</template>
  
<script>
export default {
  name: 'lightingProject',
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
