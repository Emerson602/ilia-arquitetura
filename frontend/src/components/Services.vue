<template>

 <div id="services-container" class="col-12 h-auto py-5 text-start d-flex justify-content-center align-items-center flex-column">
    <div class="col-10 text-center text-md-start">
        <h3>Nossos Serviços:</h3>
    </div>

    <div class="col-10 px-5 px-md-0 fs-5 mt-3 mt-md-5 my-md-5 d-flex flex-column flex-md-row justify-content-evenly align-items-start align-items-md-center">
        
        <div id="type-project" @click="openModal('arquitetonico')" class="mt-5 mt-md-3 d-flex flex-column justify-content-center align-items-start align-items-md-center">
            <span>Projetos Arquitetônicos</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </div>

        <div id="type-project" @click="openModal('interiores')" class="mt-5 mt-md-3 d-flex flex-column justify-content-center align-items-start align-items-md-center">
            <span>Arquitetura de interiores</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </div>

        <div id="type-project" @click="openModal('consultorias')" class="mt-5 mt-md-3 d-flex flex-column justify-content-center align-items-start align-items-md-center"> 
            <span>Consultorias</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-arrow-right" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </div>
        
    </div>

    <div v-if="showModal" class="modal fade show" id="modal" tabindex="-1" aria-modal="true" role="dialog" style="display: block;">

        <div class="modal-dialog modal-dialog-centered">

            <div class="modal-content">

            <div class="modal-header border-0">
                <h5 class="modal-title">{{ type }}</h5>

                <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            
            <div class="modal-body">
                <p>{{ description }}</p>
            </div>

            </div>
        </div>
    </div> 
    <div v-if="showModal" class="modal-backdrop fade show"></div>
 </div>

</template>

<script>
export default {
  name: 'Services',

  data() {
    return {
      name: 'Services',         
      right_arrow: require('@/assets/right-arrow.webp'),
      showModal: false,
      type: '',
      description: ''
    }
  },

methods: {
  openModal(type) {
    this.setModalContent(type)
    this.showModal = true
  },

  setModalContent(type) {
    const contentMap = {
      arquitetonico: {
        title: 'PROJETO ARQUITETÔNICO',
        description: 'Projeto de arquitetura detalhado para construção ou reforma de espaços.'
      },
      interiores: {
        title: 'PROJETO DE INTERIORES',
        description: 'Projeto de interiores detalhado pensando no design dos espaços internos.'
      },
      consultorias: {
        title: 'CONSULTORIAS',
        description: 'Orientação e aconselhamento para ambientes sem obras e sem detalhamento de projeto.'
      }
    }

    this.type = contentMap[type].title
    this.description = contentMap[type].description
  },

  closeModal() {
    this.showModal = false;
  }
}

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

.modal-content {
    background-color: var(--color-3);
}



#type-project, span:hover {
    cursor: pointer;
    color: var(--color-2);
    transition: 1,5s;
}

</style>
