<template>  
         
    <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5"> 
        <label class="fw-bold my-4">Qual o tipo de projeto?</label>

        <div class="mt-1 form-check" v-for="type in [
            'Consultoria de interiores',
            'Projeto de interiores residencial',
            'Projeto de arquitetura residencial',
            'Projeto de fachada residencial',
            'Projeto de interiores comercial',
            'Projeto de arquitetura comercial',
            'Projeto de fachada comercial'
        ]" :key="type">
            <input class="form-check-input" type="radio" :value="type" v-model="form.projectType">
            <label class="form-check-label">{{ type }}</label>
        </div>

        <input
            class="col-10 col-md-6 form-control mt-4"
            type="text"
            placeholder="Outro"
            v-model="form.otherProjectType"
        >
    </div>
       
</template>
  
<script>
export default {
  name: 'typeProject',
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
