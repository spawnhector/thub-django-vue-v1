
export const UserProfile = {
    template: '#user-profile',
    props: ['pydata'],
    data() {
        return {
            showCreatePostModal: false,
            expandComment: false,
            expandReply: false,
            avatars: [
                {
                alt: 'John Smitt',
                id: 1,
                presence: 'Online',
                role: 'Frontend Engineer',
                src: null
                },
                {
                alt: 'Joanne Swizzlette',
                id: 2,
                presence: 'Away',
                role: 'Automation Engineer',
                src: 'https://randomuser.me/api/portraits/med/women/3.jpg'
                },
                {
                alt: 'Frankie Dowle',
                id: 4,
                presence: 'Online',
                role: 'Platform Architect',
                src: 'https://randomuser.me/api/portraits/med/men/8.jpg'
                },
                {
                alt: 'Annette Walker',
                id: 5,
                presence: 'Online',
                role: 'Head of UX',
                src: 'https://randomuser.me/api/portraits/med/women/5.jpg'
                },
                {
                alt: 'Danny Quaide',
                id: 6,
                presence: 'Offline',
                role: 'UI Designer',
                src: 'https://randomuser.me/api/portraits/med/men/10.jpg'
                },
                {
                alt: 'Paisley Arch',
                id: 7,
                presence: 'Holiday',
                role: 'Automation Engineer',
                src: 'https://randomuser.me/api/portraits/med/women/7.jpg'
                },
                {
                alt: 'Kenneth Boomstang',
                id: 8,
                presence: 'Online',
                role: 'Frontend Engineer',
                src: 'https://randomuser.me/api/portraits/med/men/1.jpg'
                },
                {
                alt: 'Donna Avery',
                id: 9,
                presence: 'Online',
                role: 'UX Researcher',
                src: 'https://randomuser.me/api/portraits/med/women/2.jpg'
                },
                {
                alt: 'Phillip Hargreaves',
                id: 10,
                presence: 'Online',
                role: 'Head of Quality',
                src: 'https://randomuser.me/api/portraits/med/men/11.jpg'
                },
                {
                alt: 'Melissa Tushoos',
                id: 11,
                presence: 'Online',
                role: 'Head of Platform Engineering',
                src: 'https://randomuser.me/api/portraits/med/women/4.jpg'
                },
                {
                alt: 'Justin Backbeard',
                id: 12,
                presence: 'Busy',
                role: 'Frontend Engineer',
                src: 'https://randomuser.me/api/portraits/med/men/13.jpg'
                },
                {
                alt: 'Amy Fullerton',
                id: 13,
                presence: 'Busy',
                role: 'UI Designer',
                src: 'https://randomuser.me/api/portraits/med/women/6.jpg'
                },
                {
                alt: 'Angus Dougherty',
                id: 14,
                presence: 'Online',
                role: 'Backend Engineer',
                src: null
                },
                {
                alt: 'Jess Cransley',
                id: 15,
                presence: 'Online',
                role: 'UX Advocate',
                src: 'https://randomuser.me/api/portraits/med/women/8.jpg'
                },
                {
                alt: 'Barry Morgan',
                id: 16,
                presence: 'Away',
                role: 'Frontend Architect',
                src: 'https://randomuser.me/api/portraits/med/men/17.jpg'
                },
                {
                alt: 'Warren Deekead',
                id: 17,
                presence: 'Online',
                role: 'Backend Engineer',
                src: 'https://randomuser.me/api/portraits/med/men/19.jpg'
                },
                {
                alt: 'Melissa Warmslent',
                id: 18,
                presence: 'Holiday',
                role: 'DevOps Engineer',
                src: 'https://randomuser.me/api/portraits/med/women/12.jpg'
                }
            ],
            darkMode: true,
            menuMaxHeight: `${(60 * 5) + 4}px`,
            presence: false,
            stackedLimit: 6,
            stackedMenu: false
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
        },
        postHasComments(comment){
            console.log(comment)
            return false
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
    },
    computed: {
        avatarsSorted () {
            return (this.avatars && this.avatars.length > 0)
                ? this.avatars.sort((a, b) => a.alt.localeCompare(b.alt))
                : null
        },
        avatarsStackedLimited () {
            return (this.avatarsSorted && this.avatarsSorted.length > 0)
                ? this.avatarsSorted.slice(0, this.stackedLimit)
                : null
        }
  },
};