<template>

    <div>
        <a :href="siteLink()" target="_blank"><button>Site</button></a>        
        <router-link to="/formulario"><button class="my-3">Quero um projeto</button></router-link>
        <router-link to="/projetos"><button class="my-3">Portfólio</button></router-link>
        <a :href="whatsappLink()" target="_blank"><button class="my-3">Contato</button></a>
        <a :href="instagramLink()" target="_blank"><button>Instagram</button></a>
        <a :href="tiktokLink()" target="_blank"><button class="mt-3">Tik Tok</button></a>         
    </div> 

</template> 


<script>

import PolygonAnimation from '@/components/PolygonAnimation.vue';

export default {
  name: 'LinkThree',
  inject: ['whatsappLink', 'instagramLink', 'tiktokLink', 'siteLink'], 
  
  components: {    
    PolygonAnimation, 
  }
}

</script>

<style scoped>

div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 100px 0;  
}  

button {
  background-color: var(--color-1);
  color: var(--color-7);
  border: 0;
  padding: 30px 30px;  
  border-radius: 43px;
  width: 500px;
}


@media (max-width: 768px) {

  button {
    width: 90vw;
  }
}


</style>

