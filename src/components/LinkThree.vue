<template>

    <div>
        <a href="https://www.iliaarquitetura.com.br/" target="_blank"><button>Site</button></a>
        <a href="https://api.whatsapp.com/send?phone=5582988777687" target="_blank"><button class="my-3">Quero um projeto</button></a>
        <a href="https://www.instagram.com/magdaemiliaarquitetura/" target="_blank"><button>Instagram</button></a>
    </div> 

</template> 


<script>

import AnimationLinksView from '@/components/AnimationLinksView.vue';

export default {
  name: 'LinkThree',
  components: {    
    AnimationLinksView, 


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

