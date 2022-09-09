
export const LoginPage = {
    template: '#app-login',
    props: ['pydata'],
    data() {
        return {
        };
    },
    methods: {
    },
    mounted(){
        this.$nextTick(()=>{
            const signupButton = document.getElementById('signup-button'),
            loginButton = document.getElementById('login-button'),
            userForms = document.getElementById('user_options-forms')

            signupButton.addEventListener('click', () => {
                userForms.classList.remove('bounceRight')
                userForms.classList.add('bounceLeft')
            }, false)

            loginButton.addEventListener('click', () => {
                userForms.classList.remove('bounceLeft')
                userForms.classList.add('bounceRight')
            }, false)
            console.log(this.pydata)
        })
    }
};