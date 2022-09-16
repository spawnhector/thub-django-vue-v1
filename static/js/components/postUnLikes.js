export const PostUnLikes = {
    template: `<span >{{unlikes}}</span>`,
    props: ['unlikes'],
    data() {
        return {
        };
    },
    mounted(){
        console.log(this.unlikes)
    }
};