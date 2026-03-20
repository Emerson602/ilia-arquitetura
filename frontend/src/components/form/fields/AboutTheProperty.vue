<template>  
         
    <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5"> 
        <label class="fw-bold my-4">Sobre o imóvel *</label>

        <div class="mt-1 form-check" v-for="type in [
            'Novo (Sem uso)',
            'Já habitado',
            'Em reforma',
        ]" :key="type">
            <input class="form-check-input" type="radio" :value="type" v-model="form.aboutTheProperty" required>
            <label class="form-check-label">{{ type }}</label>
        </div>

    </div>
       
</template>
  
<script>
export default {
  name: 'aboutTheProperty',
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
