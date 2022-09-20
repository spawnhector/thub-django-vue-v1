export const PostModal = {
    template: `#create-post-modal`,
    props: ['pydata'],
    data() {
        return {
            originInputSize: false,
            tab: null,
            tabs: [
                {id:1,icon: 'subject',text: 'Make Post'},
                {id:2,icon: 'camera_enhance',text: 'Photo/Video'},
                {id:3,icon: 'videocam',text: 'Live Video'},
                {id:4,icon: 'event',text: 'Life Event'},
            ]
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