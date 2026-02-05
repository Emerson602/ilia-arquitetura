<template>
  <div id="home">     
    <ImageTransitionContainer />
    <About />
    <Services />
    <Highlights />
   <!-- <Form /> -->
    <Contacts />    
    <Footer />
  </div>
</template> 


<script>

 
import ImageTransitionContainer from '@/components/ImageTransitionContainer.vue'; 
import Highlights from '@/components/Highlights.vue'; 
import Contacts from '@/components/Contacts.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import Footer from '@/components/Footer.vue';
//import Form from '@/components/Form.vue';



  export default {
    name: 'HomeView',
    components: {    
      ImageTransitionContainer, 
      About,
      Services,
      Highlights,      
      Contacts,
      Footer, 
      //Form,

    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    height: 100vh;       
  }
  
</style>

