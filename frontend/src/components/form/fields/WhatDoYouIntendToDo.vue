<template>  
         
    <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5"> 
        <label class="fw-bold my-4">O que você pretende fazer no espaço?</label>

        <div class="mt-1 form-check" v-for="type in [
            'Apenas mobiliário e decoração',
            'Pequenas mudanças (pintura, iluminação, móveis)',
            'Reforma moderada (troca de revestimentos, marcenaria, ajustes)',
            `Reforma completa (quebra de paredes, alteração de layout)`,
        ]" :key="type">
            <input class="form-check-input" type="radio" :value="type" v-model="form.whatDoYouIntendToDo">
            <label class="form-check-label">{{ type }}</label>
        </div>

    </div>
       
</template>
  
<script>
export default {
  name: 'whatDoYouIntendToDo',
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
