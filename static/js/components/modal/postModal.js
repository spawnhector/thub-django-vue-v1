export const PostModal = {
    template: `#create-post-modal`,
    props: ['pydata'],
    data() {
        return {
            tab: null,
            tabs: [
                {id:1,icon: 'subject',text: 'Make Post'},
                {id:2,icon: 'camera_enhance',text: 'Photo/Video'},
                {id:3,icon: 'videocam',text: 'Live Video'},
                {id:4,icon: 'event',text: 'Life Event'},
            ],
            formValid: false
        };
    },
    methods: {
        closeModal(){
            this.$emit('closepostmodal')
        },
        submit () {
            this.$refs.form.submit();
        },
        validForm(){
            this.formValid = true
        },
        validNotForm(){
            this.formValid = false
        }
    },
    mounted(){
    }
};