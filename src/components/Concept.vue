<template>
    <section id="concept" class="pt-5 pb-5 col-12 d-flex flex-column flex-lg-row justify-content-center align-items-center">

        <div class="p-5 col-12 col-lg-5 text-start">
           <h3 class="fs-1 text-center text-lg-start">Conceito</h3>
           <p class="fs-5 mt-5">
            O conceito de trabalho de Magda Nascimento valoriza a importância de utilizar materiais naturais
            e trazer elementos da natureza para dentro dos ambientes, criando uma conexão profunda entre
            o espaço e seus ocupantes. 
            
            A escolha de materiais como madeira, pedra e fibras naturais não apenas acrescenta beleza e
            autenticidade ao design, mas também promove um ambiente mais saudável e sustentável.

            Integrar a natureza nos espaços interiores fortalece essa relação, proporcionando conforto,
            bem-estar e equilíbrio. 
            
            Para Magda, essa abordagem é essencial para criar projetos que dialoguem com o meio ambiente
            e ao mesmo tempo melhorem a qualidade de vida das pessoas.
           </p>
        </div>
        
        <img class="col-10 col-lg-4" :src="image" alt="image"/>
        
    </section>
</template>

<script>

export default {
  name: 'Concept',
  data() {
    return {
        image: require('@/assets/concept-image.webp')
    };
  }, 
}
</script>

<style scoped>

  #concept {
      background-color: var(--color-medium-brown);     
  } 

  #concept p {
    text-wrap: balance;
  }
</style>
