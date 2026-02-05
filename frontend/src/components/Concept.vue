<template>
    <section id="concept" class="pt-5 pb-5 col-12 d-flex flex-column flex-lg-row justify-content-center align-items-center">

        <div class="p-5 col-12 col-lg-5 text-start">
           <h3 class="fs-1 text-center text-lg-start">Ilia Arquitetura</h3>
           <p class="fs-5 mt-5">
              O Estúdio Ilia Arquitetura nasce com o propósito de criar espaços funcionais, acolhedores e atemporais, desenvolvidos a partir de um olhar sensível e técnico sobre cada projeto. <br><br>

              Com atuação em Maceió – AL e atendimento para todo o Brasil, o estúdio oferece soluções personalizadas em projetos de arquitetura e interiores, tanto de forma presencial quanto remota, sempre mantendo proximidade, cuidado e atenção aos detalhes.<br><br>

              Cada projeto é pensado de maneira única, considerando as necessidades, o orçamento e o uso real do espaço, buscando equilíbrio entre estética, funcionalidade e identidade.<br><br>

              No Estúdio Ilia Arquitetura, acreditamos que bons projetos unem beleza, conforto e praticidade, resultando em ambientes que fazem sentido hoje e permanecem relevantes ao longo do tempo.
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
      background-color: var(--color-2);     
  } 

  #concept p {
    text-align: justify;
    hyphens: auto;
    text-indent: 10px;
  }
</style>
