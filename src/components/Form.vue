    <template>
        <div id="contacts-container" class="text-center pt-5">     

            <span class="fs-2 mt-5">Pré-briefing</span>
    
            <form @submit.prevent="submitForm" id="form" class="col-10 col-md-9 col-lg-7 pt-5">
                <div class="d-flex flex-column flex-md-row align-items-center col-12" id="double-fields">
                    <div class="mt-4 col text-start fs-5">
                        <label for="name">Nome</label>
                        <input id="name" v-model="form.name" type="text" class="rounded p-4 pt-1 pb-1" minlength="3" required>
                    </div>
                    <div class="mt-4 col text-start fs-5">
                        <label for="phone">Telefone</label>
                        <input id="phone" placeholder="5511912345678" v-model="form.phone" type="tel" class="rounded p-4 pt-1 pb-1" pattern="[0-9]{3,20}" minlength="3" required>
                    </div>
                </div>
    
                <div class="mt-4 form-group text-start fs-5">    
                    <label for="email">E-mail</label>
                    <input id="email" placeholder="Ex: id@gmail.com" v-model="form.email" type="email" class="rounded d-block col-12 p-4 pt-1 pb-1" required>        
                </div>
                <div class="mt-4 form-group text-start fs-5">
                    <label for="message">Mensagem</label>
                    <textarea id="message" v-model="form.message" class="rounded col-12 p-4 pt-1 pb-1" rows="3" minlength="10" required></textarea>                 
                </div>
                <div class="mt-5 d-flex justify-content-center justify-content-md-end align-items-center">
                    <button id="btn-submit" type="submit" class="fs-5 mt-5">Enviar</button>
                </div>            
            </form>     

       

            <div v-if="visibleModal" id="modal" class="d-flex flex-column justify-content-center align-items-center rounded">
         
                <svg id="close" v-if="showX" @click="closeModal" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x m-3 position-absolute top-0 end-0" viewBox="0 0 16 16">
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
            email: '',
            name: '',
            phone: '',
            message: ''
            },
            visibleModal: false,
            showX: false,
            btnIsDisabled: false, 
            textModal_1: '',
            textModal_2: '',                      
        };
    },
    methods: {
        async submitForm() {

            this.changeBtnState(true); 
            this.showModal();
            this.changeTextModal('Enviando...', '');

            try {
                await axios.post('http://localhost:3000/form', this.form);    //  http://url do site/form                          
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
        }     
    },
    mounted() {        

    },  
    }
    </script>


    <style scoped>

    
    </style>
