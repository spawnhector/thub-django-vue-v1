let React = window.React
const e = React.createElement;

function LikeButton({pydata}){
    const [liked,setLiked] = React.useState(false)
    if (liked) {
        return e(
            'div',{ },pydata
        );
    }
    return e(
        'button',{ onClick: () => setLiked(true) },'Like'
    );
}
export const Main = {
    template: `
        <react :component="likebutton" :pydata="pydata"/>
    `,
    props: ['pydata'],
    data() {
        return {
            likebutton: LikeButton
        };
    },
    computed: {},
    mounted(){
    }
};