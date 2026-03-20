<template>  
         
        <div class="col-10 col-md-6 mt-4" id="double-fields">
            <div class="d-flex flex-column mt-4 text-start fs-5">
                <label for="name">Nome *</label>
                <input id="name" v-model="form.name" type="text" class="rounded p-4 pt-1 pb-1" minlength="3" required>
            </div>
            <div class="d-flex flex-column mt-4 text-start fs-5">
                <label for="phone">Qual seu WhatsApp? *</label>
                <input id="phone" placeholder="5511912345678" v-model="form.phone" type="tel" class="rounded p-4 pt-1 pb-1" pattern="[0-9]{3,20}" minlength="3" required>
            </div>
        </div>

        <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5 form-group">    
            <label for="email">Seu e-mail</label>
            <input id="email" placeholder="Ex: id@gmail.com" v-model="form.email" type="email" class="rounded d-block col-12 p-4 pt-1 pb-1">        
        </div>
       
</template>
  
<script>
export default {
  name: 'contactsInfo',
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
