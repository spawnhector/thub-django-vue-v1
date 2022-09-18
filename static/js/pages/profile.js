
export const UserProfile = {
    template: '#user-profile',
    props: ['pydata'],
    data() {
        return {
            showCreatePostModal: false,
            expandComment: false,
            expandReply: false,
        };
    },
    components:{
        
    },
    methods: {
        addStyle(ele){
            ele.classList.add("scrolling")
            // document.getElementById('p-tabs').classList.remove('animate')
        },
        removeStyle(ele){
            // document.getElementById('p-tabs').classList.add('animate')
            ele.classList.remove("scrolling")
        },
        closePostModal(){
            this.showCreatePostModal = false
        },
        toggleComments(id){
            if (this.expandComment == id) {
                this.expandComment = false;
            } else {
                this.expandComment = id;
            }
        },
        toggleReplies(id){
            if (this.expandReply == id) {
                this.expandReply = false;
            } else {
                this.expandReply = id;
            }
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