export const PostModal = {
    template: `#create-post-modal`,
    props: ['pydata'],
    data() {
        return {
        };
    },
    mounted(){
        console.log(this.pydata)
    }
};