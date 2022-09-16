
export const UserProfile = {
    template: '#user-profile',
    props: ['pydata'],
    data() {
        return {
            showCreatePostModal: false
        };
    },
    components:{
        
    },
    methods: {
        addStyle(ele){
            ele.classList.add("scrolling")
        },
        removeStyle(ele){
            ele.classList.remove("scrolling")
        }
    },
    mounted(){
        let _this = this
        this.$nextTick(()=>{
            let profileMAin = document.getElementById('profile-main')
            let profileBody = document.getElementById('profile-body')
            profileMAin.onscroll = function(event){
                if (event.target.scrollTop >= 200) {
                    _this.addStyle(profileBody)
                }
                if (event.target.scrollTop < 200) {
                    // console.log(event.target.scrollTop )
                    _this.removeStyle(profileBody)
                }
            }
            let postModalTrigger = document.querySelector('.post-modal-trigger')
            postModalTrigger.addEventListener('click', function(){
                _this.showCreatePostModal = true
            })
        })
    }
};