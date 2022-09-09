
export const LoginModal = {
    template: '#modal-tmpl',
    props: ['pydata'],
    data() {
        return {
        };
    },
    methods: {
        closeModal(){
            this.$emit('closeloginmodal')
        }
    }
};