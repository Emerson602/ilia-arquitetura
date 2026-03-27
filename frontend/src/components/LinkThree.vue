<template>

    <div id="container-links">

        <router-link to="/projetos">
          <button class="my-3">
            Portfólio
          </button>
        </router-link> 
        <a :href="siteLink()" target="_blank" class="my-3">
          <button>
          Visite o nosso site
         </button>
       </a>
       <router-link to="/formulario">
          <button class="my-3">
             Solicite um orçamento
          </button>
       </router-link>   
       <a :href="whatsappLink()" target="_blank" class="my-3">
          <button>
          Fale comigo
         </button>
       </a>         

    </div> 

</template> 


<script>

import PolygonAnimation from '@/components/PolygonAnimation.vue';

export default {
  name: 'LinkThree',
  inject: ['whatsappLink', 'instagramLink', 'tiktokLink', 'siteLink'], 
  
  components: {    
    PolygonAnimation, 
  },
  methods: {

    scrollToDown(duration = 1500) {

      const containerLinks = document.querySelector("#container-links");
      
        if (!containerLinks) return;

        const start = window.scrollY;
        const end = containerLinks.offsetTop;
        const distance = end - start;

        let startTime = null;

        function animateScroll(currentTime) {
          if (!startTime) startTime = currentTime;

          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          const ease = progress * (2 - progress);

          window.scrollTo(0, start + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
          }
        }

        requestAnimationFrame(animateScroll);
      }
  },
  mounted() {  
    
    setTimeout(() => {
      //this.scrollToDown(1500);
    }, 2000); 

  }
}
</script>

<style scoped>

#container-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 0 100px 0;  
} 

#container-links svg {
  fill: var(--color-3);
}

#container-links svg:hover {
  fill: var(--color-1);
}

#container-links a {
   text-decoration: none;
}

button {
  background-color: var(--color-1);
  color: var(--color-7);
  border: 0;
  padding: 15px 0;  
  border-radius: 8px;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: var(--color-3);
}


@media (max-width: 768px) {

  button {
    width: 75vw;
    padding: 10px 0; 
    border-radius: 8px;
  }
}


</style>

