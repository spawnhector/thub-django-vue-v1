export const CopyRightYear = {
    template: `
        <div>{{year}}</div>
    `,
    props: [],
    data() {
        return {
            year : new Date().getFullYear()
        };
    },
    mounted(){
    }
};