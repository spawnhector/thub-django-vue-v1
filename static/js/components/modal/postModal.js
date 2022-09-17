export const PostModal = {
    template: `#create-post-modal`,
    props: ['pydata'],
    data() {
        return {
            originInputSize: false
        };
    },
    methods: {
        checkInput(el){
            var val=el.scrollHeight;
            var h=el.offsetHeight;
            if(this.originInputSize == false) this.originInputSize = h;
            if(val>h){
                h=h+50
                el.style.height=`${h}px`;
            }
            if(el.value == '') el.style.height=`${this.originInputSize}px`;
        },
        closeModal(){
            this.$emit('closepostmodal')
        }
    },
    mounted(){
        let _this = this
        _this.$nextTick(function(){
            let input = document.getElementById('id_body')
            input.addEventListener('keyup', function(){
                _this.checkInput(input)
            })
        })
    }
};