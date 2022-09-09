let React = window.React
const e = React.createElement;

function App(){
    // console.log(divEle)
    return e(
            'div',{ }
        )
}

export const ThubApp = {
    template: `
        <react :component="app" :thub_slots="slots"/>
    `,
    props: [],
    data() {
        return {
            app: App,
            slots: false
        };
    },
    mounted(){
        // this.slots = this.$slots.default
        console.log(this.$parent.$refs.thub_app)
        // this.child.push(this.$parent.$refs.app.$slots)
    }
};