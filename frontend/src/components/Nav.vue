<template>
  <nav id="nav">
    <ul class="d-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center m-0 p-0 text-uppercase">
      <router-link to="/" @click="closeMenu"><li class="m-2 mx-lg-4">Inicio</li></router-link> 
      <router-link to="/projects" @click="closeMenu"><li class="m-2 mx-lg-4">Projetos</li></router-link> 
      <li @click="scrollToAbout">Sobre</li>   
      <a class="m-2 mx-lg-4" @click="closeMenu" href="https://api.whatsapp.com/send?phone=5582988777687" target="_blank"><li>Quero um projeto</li></a>
    </ul>            
  </nav>  
</template>
  
<script>

import { nextTick } from "vue";

export default {
  name: 'Nav',
  data() {
    return {

    };
  },

  methods: { 

    emitToggleScroll() { 
      this.$emit('toggle-menu'); 
    }, 
    closeMenu() {
      this.emitToggleScroll(); 
    },
    async scrollToAbout() {
      this.closeMenu();

      
      if (this.$route.path !== "/") {
        await this.$router.push("/");
        await nextTick(); 
      }

      
      const about = document.querySelector("#about");

      if (about) {
        about.scrollIntoView({ behavior: "smooth" });
      }
    }

    },

}
</script>   
   
<style scoped> 

li {
  color: var(--color-7);
}

</style>
