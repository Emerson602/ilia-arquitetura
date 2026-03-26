<template>
  <div id="links">
    <div id="box-polygon">   
      <PolygonAnimation />
    </div>
  <LinkThree />
  <Footer />
  </div> 
</template> 


<script>

import PolygonAnimation from '@/components/PolygonAnimation.vue';
import LinkThree from '@/components/LinkThree.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'LinksView',
  components: {    
    PolygonAnimation,
    LinkThree, 
    Footer,
 
  }
}

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#box-polygon { 
  width: 100%;
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/concept-image.webp');
  background-repeat: no-repeat;
  background-size: cover;  
  z-index: 100;
}

#links {
  background-color: var(--color-7);
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

</style>

