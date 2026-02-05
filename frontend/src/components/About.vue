<template>

 <div class="about d-flex flex-column justify-content-center align-items-center mt-0 mt-md-5 mb-5 h-auto">

    
    <div class="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 mb-5">   
      
      <div class="col-12 col-md-6 mt-5 m-md-0">
        <div class="d-flex justify-content-center align-items-center align-items-md-end flex-column"> 

            <div class="col-10 d-flex justify-content-center align-items-center align-items-md-center flex-column">
              <img class="col-6 col-md-4" :src="logo_2" alt="image logo">
            </div>       

            <p class="col-10 fs-5 mt-3">
             Sou Magda Nascimento, Arquiteta e Urbanista, formada pela Universidade Federal de Alagoas (UFAL), e atuo no desenvolvimento de projetos que unem estética, funcionalidade e sensibilidade às necessidades de cada cliente.
              <br><br>
             Acredito que a arquitetura tem o poder de transformar rotinas e experiências, indo além da forma e da técnica. Meu processo criativo é baseado na escuta atenta, no cuidado com os detalhes e na busca por soluções que respeitem o contexto, o estilo de vida e a identidade de quem irá ocupar o espaço.
              <br><br>
             No Estúdio Ilia Arquitetura, cada projeto nasce do olhar atento às histórias, necessidades e singularidades de quem vai viver o espaço, garantindo coerência entre conceito, funcionalidade e execução.
            </p>

          </div> 
      </div>

      <div class="col-12 col-md-6 mt-3 mt-md-5 d-flex justify-content-center align-items-center">
        <img :src="imgProfile" alt="Profile Image" class="col-10 col-md-8 rounded-circle">
      </div>

    </div> 
  </div>

</template>

<script>

  export default {
    name: 'About', 
    data() {
      return {
          name: "About",        
      }
    },
    data() {
      return {
        imgProfile: require('@/assets/profile-image-2.webp'),
        logo_2: require('@/assets/logo-2.webp'),
      }
    },
  }
</script>

<style scoped>

  p {
    text-align: justify;
    hyphens: auto;
  }

</style>
