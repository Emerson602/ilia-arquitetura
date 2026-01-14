<template>
  <div id="home">     
    <ImageTransitionContainer />
    <About />
    <MostRecent />
    <FollowMe />
    <Footer />
  </div>
</template> 


<script>

 
import ImageTransitionContainer from '@/components/ImageTransitionContainer.vue'; 
import MostRecent from '@/components/MostRecent.vue'; 
import FollowMe from '@/components/FollowMe.vue';
import About from '@/components/About.vue';

import Footer from '@/components/Footer.vue';

  export default {
    name: 'HomeView',
    components: {    
      ImageTransitionContainer, 
      About,
      MostRecent,      
      FollowMe, 
      Footer, 

    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    height: 100vh;       
  }
  
</style>

