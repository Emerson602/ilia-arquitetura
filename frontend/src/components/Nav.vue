<template>
  <nav id="nav">
    <ul class="d-flex flex-column flex-lg-row justify-content-lg-center align-items-lg-center m-0 p-0 text-uppercase">
      <router-link to="/" @click="closeMenu"><li class="m-2 m-lg-2">Inicio</li></router-link> 
      <router-link to="/projects" @click="closeMenu"><li class="m-2 m-lg-2">Projetos</li></router-link> 
      <li @click="scrollToAbout">Sobre</li>    
      <a class="m-2 m-lg-2" @click="closeMenu" href="https://api.whatsapp.com/send?phone=5582988777687" target="_blank"><li>Quero um projeto</li></a>
    </ul>            
  </nav>  
</template>
  
<script>
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
    scrollToAbout() {
      this.closeMenu();
      const about = document.querySelector('#about')
      about.scrollIntoView({ behavior: 'smooth' }); 
    } 

  },

}
</script>   
   
<style scoped> 

li {
  color: var(--color-7);
}

</style>
