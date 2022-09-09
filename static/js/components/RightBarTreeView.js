const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
export const RightBarTreeView = {
  template: `
    <v-card
        class="mx-auto rounded-0 right-bar-tree"
    >
        <v-hover
            v-slot="{ hover }"
            close-delay="200"
        >
            <v-sheet 
                class="pa-4 primary lighten-2"
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                raised
            >
            <v-text-field
                v-model="search"
                :label="searchLabel"
                dark
                flat
                solo-inverted
                hide-details
                clearable
                clear-icon="mdi-close-circle-outline"
            ></v-text-field>
            <v-checkbox
                v-model="caseSensitive"
                dark
                hide-details
                label="Case sensitive search"
            ></v-checkbox>
            </v-sheet>
        </v-hover>
        <v-card-text class="right-tree-scroll">
            <v-treeview
                :items="rightBarTreeView"
                :load-children="fetchStory"
                :active.sync="active"
                :search="search"
                :filter="filter"
                :open.sync="open"
                :hoverable="true"
                :rounded="true"
                :transition="easing"
                activatable
                open-on-click
                transition
            >
                <template v-slot:prepend="{ item }">
                    <v-icon
                        v-if="item.children"
                        v-text="item.id === 1 ? 'mdi-home-variant' : 'mdi-folder-network'"
                    ></v-icon>
                    <v-icon
                        v-if="item.link"
                        v-text="'mdi-link'"
                    ></v-icon>
                </template>
            </v-treeview>
        </v-card-text>
    </v-card>
  `,
    props: ['pydata'],
    data() {
        return {
            rightBarTreeView: [],
            searchLabel: 'Search '+ this.pydata.app_name_alias +' Directory',
            open: [],
            active: [],
            search: null,
            caseSensitive: false,
            duration: 300,
            offset: 0,
            easing: 'easeInOutCubic',
            index: 0,
            subIndex: 0
        };
    },
    computed: {
        filter () {
            return this.caseSensitive
            ? (item, search, textKey) => item[textKey].indexOf(search) > -1
            : undefined
        },
        target () {
            const value = this[this.type]
            console.log(value)
            if (!isNaN(value)) return Number(value)
            else return value
        },
        options () {
            return {
                duration: this.duration,
                offset: this.offset,
                easing: this.easing,
            }
        },
        selected () {
            if (!this.active.length) return undefined
            const id = this.active[0]
            // return this.rightBarTreeView.find(story => story.id === id)
        },
    },
    watch: {
      selected: '',
    },
    methods: {
        checkPath(path){
            if(path == '/') return {id: 1, name: 'Home', children: []}
            return path
        },
        checkIndex(){
            let found = false;
            this.rightBarTreeView.forEach(element => {
                if (element.id == this.index) {
                    this.subIndex = this.index + 1;
                    this.index++
                    found = true;
                }
            });
            if (found) {
                return this.subIndex 
            } else {
                return this.index
            }
        },
        getChildren(path){
            let stor = '';
            if(path == '/') {
                stor =  this.pydata.tabItems.map((val)=>{
                    let arrToReturn = {
                        id: this.checkIndex(), 
                        name: val,
                        children: []
                    }
                    this.index++
                    return arrToReturn
                })
                stor = [...stor,...this.pydata.moreTabItems.map((val)=>{
                    let arrToReturn = {
                        id: this.checkIndex(), 
                        name: val,
                        children: []
                    }
                    this.index++
                    return arrToReturn
                })]
            }
            return stor
        },
        getSubChildren(item){
            let titles = ''
            this.pydata.userStoryLazy.forEach(element => {
                if (element[item.name]) {
                    titles = element[item.name]
                }
            });
            return titles.map((val,index)=>{
                let arrToReturn = {
                    id: this.checkIndex(), 
                    name: val.data.cardTitle,
                    link: true,
                    click : '#test_storycard-Trending-2'
                }
                this.index++
                return arrToReturn
            })
        },
        getTreeItems(item){
            this.active = item
        },
        getPath(){
            return window.location.pathname;
        },
        async fetchStory (item) {
            await pause(1500)
            if(item.name == 'Home') {
                return item.children.push(...this.getChildren(this.getPath()))
            }
            return item.children.push(...this.getSubChildren(item))
        },
    },
    created(){
        this.rightBarTreeView = [this.checkPath(this.getPath())]
    }
};