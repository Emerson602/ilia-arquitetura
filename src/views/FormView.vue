<template>
  <div id="Form">   
    <Form /> 
    <Contacts />    
    <Footer />
  </div>
</template> 


<script>

 
import Form from '@/components/Form.vue';
import Contacts from '@/components/Contacts.vue';
import Footer from '@/components/Footer.vue';




  export default {
    name: 'FormView',
    components: {    
      Form,
      Contacts,
      Footer, 
    }
  }
</script>

<style scoped>

  
</style>

