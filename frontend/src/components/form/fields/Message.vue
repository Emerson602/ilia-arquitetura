<template>  
         
    <div class="col-10 col-md-6 mt-4 form-group text-start fs-5">
        <label for="message">Alguma outra informação importante que gostaria de compartilhar? </label>
        <textarea id="message" v-model="form.message" class="rounded col-12 mt-4 p-4 pt-1 pb-1" rows="3"></textarea>                 
    </div>
       
</template>
  
<script>
export default {
  name: 'message',
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
