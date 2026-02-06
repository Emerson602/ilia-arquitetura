<template> 
  <Header @toggle-scroll="toggleScroll" /> 
  <Preload />
  <WhatsappButton />
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'; 
import Preload from '@/components/Preload.vue';
import WhatsappButton from '@/components/whatsappButton.vue';

export default {
  name: 'App',
  components: {
    Header,
    Preload,
    WhatsappButton
  },
  data() {
    return {

    };
  },
  methods: {
    toggleScroll() {
      this.showNav = !this.showNav;   
     
      if (this.showNav) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    
  }
}
</script>

<style>

@font-face {
    font-family: 'Tan Pearl';
    src: url('../public/fonts/fonnts.com-tan-pearl.otf') format('opentype'); 
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Alta Regular';
    src: url('../public/fonts/Alta_regular.otf') format('opentype'); 
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Alta Light';
    src: url('../public/fonts/Alta_light.otf') format('opentype'); 
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Alta Caption';
    src: url('../public/fonts/Alta_caption.otf') format('opentype'); 
    font-weight: normal;
    font-style: normal;
}
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;  
  color: #000;
 } 

 :root {
  --color-1:#71744a; 
  --color-2:#e2d5c4; 
  --color-3:#965b3e; 
  --color-4:#4F493F; 
  --color-5:#EDE1D2; 
  --color-6: #B0C39D;
  --color-7: #fff;
  --color-8: #141414;
}

 h1, h2, h3, h4 {  
  font-family: 'Raleway', sans-serif;
 }

 p {
  color: var(--color-8);
 }

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: var(--color-7);
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-6);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-1);
}

#nav ul, #nav a {
    text-decoration: none;
    list-style: none; 
}

li:hover, a:hover, button:hover {
  color: var(--color-6);
  transition: 1s;  
  cursor: pointer !important;
}

@media(max-width: 992px) { 

  #menu-mobile {    
      overflow-y: hidden;     
      background-color: var(--color-3);        
      animation: nav-animation 0.5s ease-in; 
      animation-delay: 0s;          
      animation-fill-mode: forwards; 
      height: 60px;
      width: 10px;
      position: fixed;      
      right: 0;
      top: 0; 
      z-index: 99; 
      margin: 40px;  
      font-size: 0rem;
      rotate: -90deg;   
      opacity: 0;                          
    }
  } 

  #close {   
    z-index: 100;   
  } 

  @keyframes nav-animation {
      0% {
        rotate: -90deg;
        opacity: 0;
      }  
      25%{
        height: 60px;
        width: 10px;
        position: fixed;         
        right: 0;
        top: 0; 
        z-index: 99; 
        margin: 40px;  
        font-size: 0rem;
        rotate: -0deg;   
        opacity: 1;       
      }
      100% {
        height: 100%;
        width: 100%;
        position: fixed;         
        right: 0;
        top: 0;          
        margin: 0;  
        font-size: 1.4rem;  
        rotate: -0deg; 
        opacity: 1;
      }
  }



  


</style>
