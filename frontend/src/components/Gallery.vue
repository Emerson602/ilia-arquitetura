<template>

  <section id="projects-container" class="mt-5 col-12 pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">  
    
    <h2 class="fs-2 mt-5 pt-5">Projetos</h2>  

    <div id="gallery-container" class="mt-5 d-flex flex-row justify-content-center align-items-center flex-wrap">       
      
      <div id="project" class="col-5 col-lg-3 m-1 m-lg-2 d-flex flex-column justify-content-center align-items-center" v-for="(project, index) in visibleProjects" :key="index">
        <img class="col-12 m-0" :src="project.thumbnail" alt="Project Image" @click="openModal(project)">   
        <p class="fs-5 m-0">{{ project.description }}</p>       
      </div>      
    </div>

    <button id="show-more" v-if="showMoreButtonVisibility" @click="showMoreProjects" class="rounded">
        <svg v-if="maxProjects <= totalProjects" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
          <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
        </svg>
    </button>
      
      <ProjectModal      
         ref="modalRef"   
         :project="selectedProject"
         :isVisible="isModalVisible"
         @close="isModalVisible = false"
         @change-scroll-width="changeWidthScroll"
      />   
     
  </section>
</template>


<script>
import ProjectModal from '@/components/ProjectModal.vue';  

export default {
  name: 'Gallery',
  components: {
    ProjectModal,   
  },
  data() {
    return {
      projects: [],
      totalProjects: 0,
      maxProjects: 6,
      showMore: true,
      selectedProject: null,
      isModalVisible: false,
      showMoreButtonVisibility: true,
    }
  },
  computed: {
    visibleProjects() {
      return this.projects.slice(0, this.maxProjects);
    }
  },
  methods: {
    createProjects() {

      const projects = [

        {
          name: 'Lavabo',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/lavabo/capa.webp'),
          imagesDay: [
            require('@/assets/lavabo/1.webp'),
            require('@/assets/lavabo/2.webp'),
            require('@/assets/lavabo/3.webp')
          ],
          imagesNight: [
            require('@/assets/lavabo/1.webp'), 
            require('@/assets/lavabo/2.webp'), 
            require('@/assets/lavabo/3.webp')
          ],
        },
        {
          name: 'Banheiro oliva',
          description: '',
          dayAndNight: true,
          thumbnail: require('@/assets/banheiro-oliva/capa.webp'),
          imagesDay: [
            require('@/assets/banheiro-oliva/1-day.webp'), 
            require('@/assets/banheiro-oliva/2.webp')
          ],
          imagesNight: [
            require('@/assets/banheiro-oliva/1-night.webp'), 
            require('@/assets/banheiro-oliva/2.webp')
          ],
        },
        {
          name: 'Quarto',
          description: '',
          dayAndNight: true,
          thumbnail: require('@/assets/quarto/capa.webp'),
          imagesDay: [
            require('@/assets/quarto/1-day.webp'),
            require('@/assets/quarto/2-day.webp'),
            require('@/assets/quarto/3.webp'),
            require('@/assets/quarto/4.webp'),
            require('@/assets/quarto/5.webp'),
            require('@/assets/quarto/6.webp'),
            require('@/assets/quarto/7.webp'),
            require('@/assets/quarto/8.webp'),
          ],
          imagesNight: [
            require('@/assets/quarto/1-night.webp'),
            require('@/assets/quarto/2-night.webp'),
            require('@/assets/quarto/3.webp'), 
            require('@/assets/quarto/4.webp'),
            require('@/assets/quarto/5.webp'),
            require('@/assets/quarto/6.webp'),
            require('@/assets/quarto/7.webp'),
            require('@/assets/quarto/8.webp'),
          ],
        },
        {
          name: 'Varanda Gourmet',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/varanda-gourmet/capa.webp'),
          imagesDay: [
            require('@/assets/varanda-gourmet/1.webp'),
            require('@/assets/varanda-gourmet/2.webp'),
            require('@/assets/varanda-gourmet/3.webp')
          ],
          imagesNight: [
            require('@/assets/varanda-gourmet/1.webp'),
            require('@/assets/varanda-gourmet/2.webp'),
            require('@/assets/varanda-gourmet/3.webp')
          ],
        },
        {
          name: 'Casa Brisa',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/casa-brisa/capa.webp'),
          imagesDay: [
            require('@/assets/casa-brisa/1.webp'),
          ],
          imagesNight: [
            require('@/assets/casa-brisa/1.webp'),
          ],
        },
        {
          name: 'Apto Terra - Cozinha',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/apartamento-terra/cozinha/capa.webp'),
          imagesDay: [
            require('@/assets/apartamento-terra/cozinha/1.webp'),
            require('@/assets/apartamento-terra/cozinha/2.webp'),
            require('@/assets/apartamento-terra/cozinha/3.webp'),
            require('@/assets/apartamento-terra/cozinha/4.webp'),
            require('@/assets/apartamento-terra/cozinha/5.webp'),
          ],
          imagesNight: [
            require('@/assets/apartamento-terra/cozinha/1.webp'),
            require('@/assets/apartamento-terra/cozinha/2.webp'),
            require('@/assets/apartamento-terra/cozinha/3.webp'),
            require('@/assets/apartamento-terra/cozinha/4.webp'),
            require('@/assets/apartamento-terra/cozinha/5.webp'),
          ],
        },
        {
          name: 'Apto Terra - Estar | Jantar',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/apartamento-terra/sala/capa.webp'),
          imagesDay: [
            require('@/assets/apartamento-terra/sala/1.webp'),
            require('@/assets/apartamento-terra/sala/2.webp'),
            require('@/assets/apartamento-terra/sala/3.webp'),
            require('@/assets/apartamento-terra/sala/4.webp'),
            require('@/assets/apartamento-terra/sala/5.webp'),
            require('@/assets/apartamento-terra/sala/6.webp'),
          ],
          imagesNight: [
            require('@/assets/apartamento-terra/sala/1.webp'),
            require('@/assets/apartamento-terra/sala/2.webp'),
            require('@/assets/apartamento-terra/sala/3.webp'),
            require('@/assets/apartamento-terra/sala/4.webp'),
            require('@/assets/apartamento-terra/sala/5.webp'),
            require('@/assets/apartamento-terra/sala/6.webp'),
          ],
        },
        {
          name: 'Apto Terra - Suíte',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/apartamento-terra/suite/capa.webp'),
          imagesDay: [
            require('@/assets/apartamento-terra/suite/1.webp'),
            require('@/assets/apartamento-terra/suite/2.webp'),
          ],
          imagesNight: [
            require('@/assets/apartamento-terra/suite/1.webp'),
            require('@/assets/apartamento-terra/suite/2.webp'),
          ],
        },
        {
          name: 'Banheiro Sol',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/banheiro-sol/capa.webp'),
          imagesDay: [
            require('@/assets/banheiro-sol/1.webp'),
            require('@/assets/banheiro-sol/2.webp'),
            require('@/assets/banheiro-sol/3.webp'),
            require('@/assets/banheiro-sol/4.webp'),
          ],
          imagesNight: [
            require('@/assets/banheiro-sol/1.webp'),
            require('@/assets/banheiro-sol/2.webp'),
            require('@/assets/banheiro-sol/3.webp'),
            require('@/assets/banheiro-sol/4.webp'),
          ],
        },
        {
          name: 'Bangalô Pousada Encantos da Serra',
          description: '',
          dayAndNight: true,
          thumbnail: require('@/assets/bangalo/capa.webp'),
          imagesDay: [
            require('@/assets/bangalo/1-day.webp'),
          ],
          imagesNight: [
            require('@/assets/bangalo/1-night.webp'),
          ],
        },
        {
          name: 'Casa Cabana',
          description: '',
          dayAndNight: false,
          thumbnail: require('@/assets/casa-cabana/capa.webp'),
          imagesDay: [
            require('@/assets/casa-cabana/1.webp'),
            require('@/assets/casa-cabana/2.webp'),
          ],
          imagesNight: [
            require('@/assets/casa-cabana/1.webp'),
            require('@/assets/casa-cabana/2.webp'),
          ],
        },


        
      ];

      projects.reverse();

      this.totalProjects = projects.length;
      this.projects = projects;
      return projects
    },
    showMoreProjects() {
      const numberVisibleProjects = 6;

      if (this.maxProjects < this.totalProjects) {
        this.maxProjects += numberVisibleProjects;
      } else {
        this.maxProjects = numberVisibleProjects;
      }
    },
    handleShowMoreButton() {
      if(this.totalProjects <= 6) {
       this.showMoreButtonVisibility = false;
      }
    },
    openModal(project) {
      this.selectedProject = project;
      this.isModalVisible = true;       
      this.changeWidthScroll(0);    

      this.$nextTick(() => {
        this.$refs.modalRef?.toggleButtonStyle();
      });

    },
    changeWidthScroll(newWidth) {      

      const style = document.createElement('style');

      style.innerHTML = `        
        ::-webkit-scrollbar {
          width: ${newWidth}px !important; 
        } 
      ` ; 

      document.head.appendChild(style);       

    },
    scrollToTop() {
      const top = document.querySelector('#projects-container')
      top.scrollIntoView({ behavior: 'smooth' });   
    },
    
  },
  mounted() {
    this.createProjects();    
    this.handleShowMoreButton();  
    this.scrollToTop();   
  }
}
</script>

<style scoped>

#gallery-container {
  padding: 20px;
}

#project img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

#show-more {
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

button { 
  background-color: var(--color-1) !important;  
  height: 40px;
  width: 200px; 
}

button:hover {
  background-color: var(--color-3) !important;  
  transition: 1s;      
}

button:hover svg {
  fill: #fff !important;
  transition: 1s;    
}

</style>