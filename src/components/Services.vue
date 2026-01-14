<template>

 <div id="services-container" class="col-12 h-auto py-5 text-start d-flex justify-content-center align-items-center flex-column">
    <div class="col-10">
        <h3>Nossos Serviços:</h3>
    </div>

    <div class="col-10 mt-3 mt-md-5 my-md-5 d-flex flex-column flex-md-row justify-content-evenly align-items-start align-items-md-center">
        
        <div class="mt-5 mt-md-3 d-flex flex-column justify-content-center align-items-center">
            <span>Projetos Arquitetônicos</span>
            <img class="col-9 mt-3" :src="service_img_1">
        </div>

        <div class="mt-5 mt-md-3 d-flex flex-column justify-content-center align-items-center">
            <span>Arquitetura de interiores</span>
            <img class="col-9 mt-3" :src="service_img_2">
        </div>

        <div class="mt-5 mt-md-3 d-flex flex-column justify-content-center align-items-center"> 
            <span>Consultorias</span>
            <img class="col-9 mt-3" :src="service_img_3">
        </div>
        
    </div>

 </div>

</template>

<script>

  export default {
    name: 'Services', 
    data() {
      return {
          name: "Services",        
      }
    },
    data() {
      return {
        service_img_1: require('@/assets/service-img-1.webp'),
        service_img_2: require('@/assets/service-img-2.webp'),
        service_img_3: require('@/assets/service-img-3.webp'),         
      }
    },
  }
</script>

<style scoped>

#services-container {
    background-color: var(--color-1);
    color: var(--color-7);
}

h3, span {
    color: var(--color-7);
}

</style>
