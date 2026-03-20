<template>
  <div id="Form">  
    <ImageTransitionContainer /> 
    <Form /> 
    <Contacts />    
    <Footer />
  </div>
</template> 


<script>

import ImageTransitionContainer from '@/components/ImageTransitionContainer.vue'; 
import Form from '@/components/form/Form.vue';
import Contacts from '@/components/Contacts.vue';
import Footer from '@/components/Footer.vue';




  export default {
    name: 'FormView',
    components: {
      ImageTransitionContainer,    
      Form,
      Contacts,
      Footer, 
    }
  }
</script>

<style scoped>

  
</style>

