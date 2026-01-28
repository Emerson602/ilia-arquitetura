<template>
    <div id="preload">   
        <div id="spin" class="mt-5"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  
  data() {
    return {
      
    };
  },
  methods: {
    removePreload() {
      const overlay = document.querySelector('#preload');
      window.addEventListener("load", () => {
        if (overlay !== null) {            
          overlay.remove();
        }
      });
    }
  },
  mounted() {
    this.removePreload(); 
  }
});
</script>

<style scoped>

    #preload {
      width: 100vw;
      height: 100vh; 
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--color-1);
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #spin {
      width: 50px;
      height: 50px;  
      border: solid 4px transparent;
      border-top: solid 4px var(--color-7);  
      border-bottom: solid 4px var(--color-7); 
      border-radius: 50%; 
      transform: rotate(0deg);
      animation: spin 2s linear infinite;
      animation-delay: 0s;
    }

    @keyframes spin {
      
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    }

</style>