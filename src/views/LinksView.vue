<template>
  <div id="links">
  <AnimationLinksView />
  <LinkThree />
  <Footer />
  </div> 
</template> 


<script>

import AnimationLinksView from '@/components/AnimationLinksView.vue';
import LinkThree from '@/components/LinkThree.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'LinksView',
  components: {    
    AnimationLinksView,
    LinkThree, 
    Footer,
 
  }
}

</script>

<style scoped>

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

