<template>
    <div id="contacts-container" class="d-flex flex-column align-items-center mt-5">     

        <span class="mt-3 mt-md-5 fs-2 col-10 text-center">SOLICITAÇÃO DE ORÇAMENTO</span>

        <p class="mt-3 mt-md-5 fs-5 col-10">
            Olá! Será um prazer <strong>desenvolver o seu projeto.</strong> <br class="d-md-none"><br class="d-md-none"> Ficamos muito felizes com o seu interesse no nosso trabalho. <br class="d-md-none">
            Para iniciar, precisamos de <strong>algumas informações</strong> para que possamos atendê-lo da melhor forma possível. <br class="d-md-none"><br class="d-md-none"> Após o envio, entraremos em contato via <strong>WhatsApp</strong> com a sua proposta.
            <br class="d-md-none"><br class="d-md-none">O retorno será feito em até <strong>3 dias úteis.</strong> Até breve!
        </p>

        <form @submit.prevent="submitForm" id="form" class="d-flex flex-column mt-5 align-items-center col-12">
            
            <contactsInfo :form="form" />
            <howDidYouFindOutAboutUs :form="form" />
            <typeProject :form="form" />
            <aboutTheProperty :form="form" />
            <whatDoYouIntendToDo :form="form" />
            <wantToChange :form="form" />
            <demolishOrBuildWalls :form="form" />
            <architectureStyle :form="form" />
            <constructionMonitoring :form="form" />
            <deadline :form="form" />
            <desiredAreas :form="form" />
            <dimensions :form="form" />
            <hasAnExecutionTeam :form="form" />
            <investmentRange :form="form" />
            <legalApproval :form="form" />
            <lightingProject :form="form" />            
            <planOfTheProperty :form="form" />
            <propertyType :form="form" />
            <references :form="form" />
            <message :form="form" />


            <div class="col-10 col-md-6 mt-5 d-flex justify-content-center align-items-center">
                <button id="btn-submit" type="submit" class="fs-5">Enviar</button>
            </div> 
            
        </form>     

    

        <div v-if="visibleModal" id="modal" class="d-flex flex-column justify-content-center align-items-center rounded">
        
            <svg id="close" v-if="showX" @click="closeModal" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-x m-3 position-absolute top-0 end-0" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>

            <div>                 
                <span class="fs-6 fs-md-5">{{ textModal_1 }}</span>    
                <span class="fs-6 fs-md-5 d-block">{{ textModal_2 }}</span>                                                     
            </div>
        
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import contactsInfo from './fields/ContactsInfo.vue';
import howDidYouFindOutAboutUs from './fields/HowDidYouFindOutAboutUs.vue';
import typeProject from './fields/TypeProject.vue';
import aboutTheProperty from './fields/AboutTheProperty.vue'
import whatDoYouIntendToDo from './fields/WhatDoYouIntendToDo.vue';
import wantToChange from './fields/WantToChange.vue';
import demolishOrBuildWalls from './fields/DemolishOrBuildWalls.vue'

import architectureStyle from './fields/ArchitectureStyle.vue';
import constructionMonitoring from './fields/ConstructionMonitoring.vue';
import deadline from './fields/Deadline.vue';
import desiredAreas from './fields/DesiredAreas.vue';
import dimensions from './fields/Dimensions.vue';
import hasAnExecutionTeam from './fields/HasAnExecutionTeam.vue';
import investmentRange from './fields/InvestmentRange.vue';
import legalApproval from './fields/LegalApproval.vue';
import lightingProject from './fields/LightingProject.vue';
import message from './fields/Message.vue';
import planOfTheProperty from './fields/PlanOfTheProperty.vue';
import propertyType from './fields/PropertyType.vue';
import references from './fields/References.vue';

export default {
name: 'Contacts', 
components: {
   contactsInfo,
   howDidYouFindOutAboutUs,
   typeProject,
   aboutTheProperty,
   whatDoYouIntendToDo,
   wantToChange,
   demolishOrBuildWalls,

   architectureStyle,
   constructionMonitoring,
   deadline,
   desiredAreas,
   dimensions,
   hasAnExecutionTeam,
   investmentRange,
   legalApproval,
   lightingProject,
   message,
   planOfTheProperty,
   propertyType,
   references,
},
data() {
    return {
         options: [
            'Piso',
            'Revestimentos de parede',
            'Forro de gesso',
            'Iluminação',
            'Pontos elétricos',
            'Hidráulica',
            'Nenhum'
        ],
        form: {
            name: '',
            phone: '',
            email: '',
            message: '',

            howDidYouFindOutAboutUs: '',
            projectType: '',  
            aboutTheProperty: '', 
            whatDoYouIntendToDo: '', 
            demolishOrBuildWalls: '',
            planOfTheProperty: '',
            otherProjectType: '',
            wantToChange: [],
            investmentRange: '',

            desiredAreas: '',
            propertyType: '',
            dimensions: '',
            architectureStyle: '',
            references: '',

            lightingProject: '',
            deadline: '',
            legalApproval: '',
            constructionMonitoring: '',
        },

        visibleModal: false,
        showX: false,
        btnIsDisabled: false,
        textModal_1: '',
        textModal_2: ''
    };
},
methods: {
    async submitForm() {

        this.changeBtnState(true); 
        this.showModal();
        this.changeTextModal('Enviando...', '');

        try {
            await axios.post('https://ilia-form.vercel.app/form', this.form);                                  
            this.changeTextModal('Enviado com sucesso!', 'Em breve entraremos em contato'); 
            this.showBtnClose(true);            
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);                   
            this.changeTextModal('Ocorreu um erro!', ''); 
            this.showBtnClose(true);              
        }
    },

    disableButton() {
        const btnSubmit = document.querySelector('#btn-submit');
        btnSubmit.disabled = this.btnIsDisabled;
    },

    changeBtnState(state) {
        this.btnIsDisabled = state;            
        this.disableButton();            
    },

    changeTextModal(firstText, secondText) {                         
        this.textModal_1 = firstText; 
        this.textModal_2 = secondText;
    },

    showModal() {
        this.visibleModal = true;                
    },

    showBtnClose(visibility) {
        this.showX = visibility;
    },

    closeModal() {
        this.changeBtnState(false);
        this.visibleModal = false;
        this.resetForm();             
    },
    resetForm() {
        this.form.email = '';
        this.form.name = ''; 
        this.form.phone = '';
        this.form.message = '';
    },     
    scroll() {

    const container = document.querySelector("#contacts-container");

      if (container) {
        container.scrollIntoView({ behavior: "smooth" });
      }
    },


},
mounted() {   
   this.scroll();
},  
}
</script>


<style scoped>

#contacts-container {
    padding: 0 0 100px 0;
}

#contacts-container p {
    text-align: justify;
    hyphens: auto;
}

button {
  background-color: var(--color-1);
  color: var(--color-7);
  border: 0;
  padding: 30px 30px;  
  border-radius: 43px;
  width: 500px;
}

button:hover {
  background-color: var(--color-3);
  transition: 1.5;
  cursor: pointer; 
}

#modal {
    width: 400px;
    height: 150px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-1);
    border: solid 2px var(--color-7); 
}

#modal span {
    color: var(--color-7);
}

#modal svg:hover {
    cursor: pointer;
    transition: 1.5s;
    color: var(--color-3);
}

@media(max-width: 768px) { 

    #modal {
        width: 90%;
    }
} 


    
</style>
