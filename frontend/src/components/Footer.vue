<template>
    <footer id="footer" class="pt-1 pb-1 text-center">
        
    </footer>
</template>

<script>

  export default {
    name: 'Footer', 
    data() {
      return {
          name: "Footer",        
      }
    },
    methods: {
      showCurrentYear() {
        const footer = document.querySelector('#footer')      
        const currentYear = new Date().getFullYear();
        if(footer) {
          footer.innerHTML = `<span class="text-light"> &copy; ${currentYear} - Ilia Arquitetura</span>`;
        }       
      },
    },
    mounted() {
      this.showCurrentYear();
    },  
  }
</script>

<style scoped>

  #footer {
    background-color: var(--color-1);        
    border-top: solid 2px var(--color-5);    
    text-transform: uppercase;
    font-size: 0.8rem;
  } 
</style>
