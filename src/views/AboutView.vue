<template>
  <div class="about d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
    <h2 class="fs-1 mt-5">Sobre mim</h2>

    <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 mb-5">   

      <div class="col-12 col-md-6 mt-0 mt-md-5 d-flex justify-content-center align-items-center">
        <img :src="imgProfile" alt="Profile Image" class="col-10 col-md-8 rounded-circle">
      </div>
      
      <div class="col-12 col-md-6 mt-5 m-md-0 d-flex justify-content-center align-items-center">
        <p class="col-10 fs-5">
          Sou Arquiteta e Urbanista formada pela Universidade Federal de Alagoas (UFAL) e atuo no desenvolvimento de projetos que unem estética, funcionalidade e sensibilidade às necessidades de cada cliente. 
          <br><br>
          Acredito que a arquitetura tem o poder de transformar rotinas e experiências, indo além da forma e da técnica. Meu processo criativo é baseado na escuta atenta, no cuidado com os detalhes e na busca por soluções que respeitem o contexto, o estilo de vida e a identidade de quem irá ocupar o espaço. 
          <br><br>
          À frente do Estúdio Ilia Arquitetura, conduzo cada projeto de forma próxima e personalizada, garantindo coerência entre conceito, funcionalidade e execução.        
        </p>
      </div>

    </div> 
  </div>
  <Footer />
</template>

<script>
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'AboutView',
    components: {
      Footer
    },
    data() {
      return {
        imgProfile: require('@/assets/profile-image.webp'),
      }
    },
  }
</script>

<style>
  p {
    text-align: justify;
    hyphens: auto;
    text-indent: 10px;
  }
</style>

