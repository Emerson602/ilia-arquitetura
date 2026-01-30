<template>  
    <Gallery /> 
    <Contacts /> 
    <Footer /> 
</template>

<script>
import Gallery from '@/components/Gallery.vue'; 
import Footer from '@/components/Footer.vue'; 
import Contacts from '@/components/Contacts.vue';

export default {
  name: 'ProjectsView',
  components: {
    Gallery,
    Contacts,
    Footer,     
  },
  data() {
    return {
      
    };
  },
  
  methods: {
      
  },
  mounted() {
          
  }
}
</script>
