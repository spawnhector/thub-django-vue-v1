export const LandingBody = {
    template: '#landing-body',
    props: ['pydata','user'],
    model: {
    },
    data() {
        return {
            currentTabItem: 'tab_Trending',
            breadcrumbs_items: [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                }
            ],
            cardsDisplayed: {},
        };
    },
    mounted(){
        this.$nextTick(()=>{
            
        })
    },
    created(){
        this.getTabItem(this.currentTabItem)
        this.$watch('currentTabItem',(newItem)=>{
            this.getTabItem(newItem)
        })
    },
    methods: {
        addItem (item) {
            const removed = this.pydata.tabItems.splice(0, 1)
            this.pydata.tabItems.push(
            ...this.pydata.moreTabItems.splice(this.pydata.moreTabItems.indexOf(item), 1),
            )
            this.pydata.moreTabItems.push(...removed)
            this.$nextTick(() => { this.currentTabItem = 'tab_' + item })
        },
        getTabItem(item){
            let tab = item.split('_')[1]
            this.breadcrumbs_items = [
                {
                text: 'Home',
                disabled: false,
                href: '/',
                },
                {
                text: tab,
                disabled: true,
                href: '/',
                }
            ]
        },
        getUserStory(tab){
            let currentStory = this.pydata.userStoryLazy.filter((val)=>{
                if(typeof val[tab] != 'undefined') {
                    return val[tab]
                }
            });
            return currentStory[0][tab].map(a => Object.assign({}, a));
        },
        getClassObject(tab){
            return {
                slider: {
                    [tab+'-slider']: tab
                }
            }
        },
        updateCardsDisplayed(recentCard){
            this.cardsDisplayed = {
                ...this.cardsDisplayed,
                recentCard
            }
        },
        triggerloginmodal(){
            this.$emit('triggerloginmodal')
        },
        getPostLikes(likes){
            console.log(likes)
            return likes
        }
    },
};