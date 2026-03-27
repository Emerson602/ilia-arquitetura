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

#links {
  background-image: url('../assets/apartamento-terra/cozinha/1.webp');
  background-repeat: no-repeat;
  background-size: cover;  
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
}

@media (max-width: 980px) {
  #links {
    background-image: url('../assets/concept-image.webp');
    background-repeat: no-repeat;
    background-size: cover;  
  }
}

#box-polygon { 
  width: 100%;
  height: auto;  
  margin: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center; 
  z-index: 100;

}




</style>

