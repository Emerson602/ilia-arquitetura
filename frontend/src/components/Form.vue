<template>
    <div id="contacts-container" class="d-flex flex-column align-items-center mt-5">     

        <span class="mt-3 mt-md-5 fs-2 col-10 text-center">SOLICITAÇÃO DE ORÇAMENTO</span>

        <p class="mt-3 mt-md-5 fs-5 col-10">
            Preencha o formulário com o máximo de informações possíveis.
            Cada detalhe é essencial para que possamos compreender o seu projeto com profundidade e avaliar se conseguimos atendê-lo da melhor forma.

            As solicitações são analisadas por ordem de envio e entram em uma lista de espera.
            De acordo com a demanda do escritório, nossa disponibilidade e o alinhamento com o tipo de projeto, o retorno pode levar de alguns dias até algumas semanas.

            Ressaltamos que nem todos os projetos enviados são necessariamente aceitos. Nosso compromisso é assumir apenas os trabalhos que conseguimos desenvolver com qualidade, atenção e dentro dos prazos adequados.

            Caso o projeto seja aprovado para a próxima etapa, entraremos em contato para agendar uma reunião online (Google Meet), com duração média de 40 minutos.
            Essa reunião tem o custo de R$200,00, valor que será integralmente descontado caso o contrato seja fechado.

            Após a reunião, você receberá uma proposta completa, com escopo, prazos e valores detalhados.
        </p>

        <form @submit.prevent="submitForm" id="form" class="d-flex flex-column mt-5 align-items-center col-12">
            
            <div class="col-10 col-md-6 mt-4" id="double-fields">
                <div class="d-flex flex-column mt-4 text-start fs-5">
                    <label for="name">Nome</label>
                    <input id="name" v-model="form.name" type="text" class="rounded p-4 pt-1 pb-1" minlength="3" required>
                </div>
                <div class="d-flex flex-column mt-4 text-start fs-5">
                    <label for="phone">Qual seu WhatsApp?</label>
                    <input id="phone" placeholder="5511912345678" v-model="form.phone" type="tel" class="rounded p-4 pt-1 pb-1" pattern="[0-9]{3,20}" minlength="3" required>
                </div>
            </div>

            <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5 form-group">    
                <label for="email">Seu e-mail</label>
                <input id="email" placeholder="Ex: id@gmail.com" v-model="form.email" type="email" class="rounded d-block col-12 p-4 pt-1 pb-1" required>        
            </div>           

            <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5">
            <label class="fw-bold my-4">Qual o tipo de projeto? *</label>

            <div class="mt-1 form-check" v-for="type in [
                'Consultoria de interiores',
                'Projeto de interiores residencial',
                'Projeto de arquitetura residencial',
                'Projeto de fachada residencial',
                'Projeto de interiores comercial',
                'Projeto de arquitetura comercial',
                'Projeto de fachada comercial'
            ]" :key="type">
                <input class="form-check-input" type="radio" :value="type" v-model="form.projectType">
                <label class="form-check-label">{{ type }}</label>
            </div>

            <input
                class="col-10 col-md-6 form-control mt-4"
                type="text"
                placeholder="Outro"
                v-model="form.otherProjectType"
            >
            </div>
            
            <div class="col-10 col-md-6 mt-4 d-flex flex-column mt-4 text-start fs-5">
                <label class="my-4 fw-bold">Qual a faixa de investimento prevista para sua obra (incluindo construção e acabamentos)?   *</label>

                <div class="form-check" v-for="range in [
                    'Até R$50,000',
                    'De R$50,000 a R$100,000',
                    'De R$100,000 a R$200,000',
                    'Acima R$200,000',
                    'Projeto hipotético'
                ]" :key="range">
                    <input class="form-check-input" type="radio" :value="range" v-model="form.investmentRange">
                    <label class="form-check-label">{{ range }}</label>
                </div>
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Para quais ambientes deseja o projeto? *</label>
            <input
                class="form-control"
                type="text"
                placeholder="Ex.: cozinha, quarto, fachada, lote, quadra etc."
                v-model="form.desiredAreas"
                required
            >
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
                <label class="fw-bold my-4">Qual é o tipo de imóvel/espaço? *</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Ex.: casa, apartamento, sala comercial, loja etc."
                    v-model="form.propertyType"
                    required
                >
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Quais as medidas gerais do ambiente? *</label>
            <input
                class="form-control"
                type="text"
                placeholder="Ex: 5m x 3m"
                v-model="form.dimensions"
                required
            >
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Qual estilo de arquitetura você mais gosta?  *</label>
            <input
                class="form-control"
                type="text"
                placeholder="Ex.: moderno, rústico, industrial, minimalista etc..."
                v-model="form.architectureStyle"
                required
            >
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Possui alguma referência ou inspiração específica?</label>
            <textarea
                class="form-control"
                rows="3"
                placeholder="Se sim, pode enviar links ou referências visuais."
                v-model="form.references"
            ></textarea>
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Deseja projeto de iluminação/luminotécnica?  *</label>

            <div class="form-check" v-for="option in ['Sim', 'Não', 'Talvez']" :key="option">
                <input class="form-check-input" type="radio" :value="option" v-model="form.lightingProject">
                <label class="form-check-label">{{ option }}</label>
            </div>
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Qual o prazo desejado para a conclusão do projeto? *</label>

            <div class="form-check" v-for="time in [
                'Urgente (menos de 1 mês)',
                '1 a 3 meses',
                '3 a 6 meses',
                'Acima de 6 meses',
                'Ainda estou planejando',                     
            ]" :key="time">
                <input class="form-check-input" type="radio" :value="time" v-model="form.deadline">
                <label class="form-check-label">{{ time }}</label>
            </div>
            </div> 

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Esse projeto precisará de aprovação legal (prefeitura, condomínio etc.)? *</label>

            <div class="form-check" v-for="approval in ['Sim', 'Não']" :key="approval">
                <input class="form-check-input" type="radio" :value="approval" v-model="form.legalApproval">
                <label class="form-check-label">{{ approval }}</label>
            </div>
            </div>

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Precisa de companhamento de obra? *</label>

            <div class="form-check" v-for="followUp in [
                'Sim',
                'Não',
                'Projeto à distância',
                'Não tenho certeza, preciso de orientação',                     
            ]" :key="followUp">
                <input class="form-check-input" type="radio" :value="followUp" v-model="form.constructionMonitoring">
                <label class="form-check-label">{{ followUp }}</label>
            </div>
            </div> 

            <div class="col-10 col-md-6 mt-4 text-start fs-5">
            <label class="fw-bold my-4">Já possui equipe de execução da obra? *</label>

            <div class="form-check" v-for="execution in [
                'Sim, já tenho uma equipe contratada',
                'Não, gostaria de indicações',
                'Ainda estou avaliando',                  
            ]" :key="execution">
                <input class="form-check-input" type="radio" :value="execution" v-model="form.hasAnExecutionTeam">
                <label class="form-check-label">{{ execution }}</label>
            </div>
            </div> 


            <div class="col-10 col-md-6 mt-4 form-group text-start fs-5">
                <label for="message">Alguma outra informação importante que gostaria de compartilhar? </label>
                <textarea id="message" v-model="form.message" class="rounded col-12 mt-4 p-4 pt-1 pb-1" rows="3" minlength="10" required></textarea>                 
            </div>

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

export default {
name: 'Contacts', 
data() {
    return {
        form: {
        name: '',
        phone: '',
        email: '',
        message: '',

        projectType: '',
        otherProjectType: '',

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
            this.changeTextModal('Enviado com sucesso!', 'Entraremos entraremos em contato'); 
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
    }
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
