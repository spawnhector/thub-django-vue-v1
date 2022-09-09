
let landingBodyContent = `
    <v-tabs-items v-model="currentTabItem">
        <v-tab-item
            v-for="tab in pydata.tabItems.concat(pydata.moreTabItems)"
            :key="tab"
            :value="'tab_' + tab"
        >
            <template>
                <v-responsive
                    class="landing-body"
                >  
                    <v-list class="slider lighten-3" :class="getClassObject(tab).slider">
                        <v-list-item
                            v-for="story in getUserStory(tab)"
                            :key="story.key"
                            class="section"
                        >
                            <v-responsive
                            class="pa-2 story-card"
                            >
                                <v-lazy
                                    v-model="story[tab]"
                                    :options="{
                                    threshold: 1
                                    }"
                                    min-height="200"
                                    class=" mb-6"
                                    transition="expand-x-transition"
                                >
                                    <v-row
                                    >
                                        <v-col
                                        >
                                            <video-card 
                                                @updatecardsdisplayedevent="updateCardsDisplayed" 
                                                @triggerloginmodal="triggerloginmodal" 
                                                :tab="tab" 
                                                :cardsDisplayed="cardsDisplayed" 
                                                :story="story" 
                                                :cardkey="story.key" 
                                                :pydata="pydata" 
                                                :user="user"
                                            />
                                        </v-col>
                                        <v-col
                                        >
                                            <video-card-comment :tab="tab" :story="story"/>
                                        </v-col>
                                    </v-row>
                                </v-lazy>
                            </v-responsive>
                        </v-list-item>
                    </v-list>
                </v-responsive>
            </template>
        </v-tab-item>
    </v-tabs-items>
`;

let landingBodyContentDropDown = `
        <v-menu
            v-if="pydata.moreTabItems.length"
            bottom
            left
        >
            <template v-slot:activator="{ on, attrs }">
                <v-chip 
                :ripple="true"
                v-bind="attrs"
                v-on="on"
                >
                    <div
                        text
                        class="align-self-center mr-4"
                    >
                        More
                    </div>
                    <v-icon right>
                    mdi-menu-down
                    </v-icon>
                </v-chip>
            </template>
            <v-list class="grey lighten-3">
                <v-list-item
                    v-for="item in pydata.moreTabItems"
                    :key="item"
                    @click="addItem(item)"
                >
                    {{ item }}
                </v-list-item>
            </v-list>
        </v-menu>
`;

export const LandingBody = {
    template: `
    <template >
        <v-container>
            <template>
                <v-tabs
                    v-model="currentTabItem"
                    fixed-tabs
                    slider-color="white"
                >
                    <v-chip :ripple="true">
                        <v-tab
                            v-for="item in pydata.tabItems"
                            :key="item"
                            :href="'#tab_' + item"
                            active-class="tab-active"
                        >
                            {{ item }}
                        </v-tab>
                    </v-chip>
                    <v-spacer></v-spacer>
                    <v-breadcrumbs :items="breadcrumbs_items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                    <v-spacer></v-spacer>
                    ${landingBodyContentDropDown}
                </v-tabs>
            </template>
            ${landingBodyContent}
        </v-container>
    </template>
    `,
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
        }
    },
};