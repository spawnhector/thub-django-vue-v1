export const VideoCardComment = {
    template: `
        <v-card
            class="mx-auto"
        >
            <v-toolbar
            height="40px"
            style="box-shadow:none"
            >
                <v-toolbar-title>New Comment</v-toolbar-title>
            </v-toolbar>
            <v-list subheader>
                <v-subheader>Recent chat</v-subheader>
                <v-layout style="height:320px">
                    <v-flex >
                        <v-list v-bind:id="idObject.commentContainer" three-line class="overflow-y-auto" height="315">
                            <template v-for="(comment) in story.data.cardComments"> 
                            <v-list-item :key="comment.key" @click="">
                                <v-list-item-avatar>
                                    <v-img :src="comment.profilePhoto"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-html="comment.userName"></v-list-item-title>
                                    <v-list-item-subtitle v-html="comment.comment"></v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            </template>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-list>
            <v-divider></v-divider>
            <v-list subheader>
                <v-subheader>Previous chats</v-subheader>

            </v-list>
        </v-card>
    `,
    props: ['story'],
    data: () => {
        return {
            scrollbottom: false,
            beers: [],
            idObject: ''
        }
    },
    methods: {
        bottomVisible() {
            var elem = document.getElementById(`${this.story.key}-comment-container`)
            if (elem.scrollTop >= (elem.scrollHeight - elem.offsetHeight)) {
                elem.scrollTop = elem.scrollHeight;
                return true
            }
        },
        addBeer() {
            axios.get('https://api.punkapi.com/v2/beers?per_page=10')
                .then(response => {
                this.beers = this.beers.concat(response.data)
                if (this.bottomVisible()) {
                    this.addBeer()
                }
            })
        }
    },
    watch: {
        scrollbottom(scrollbottom) {
            if (scrollbottom) {
                this.addBeer()
            }
        }
    },
    mounted() {
        this.idObject = {
            commentContainer: `${this.story.key}-comment-container`
        }
        this.$nextTick(function(){
            document.getElementById(`${this.story.key}-comment-container`).addEventListener('scroll', () => {
                this.scrollbottom = this.bottomVisible()
            })
            // this.addBeer()
        })
    }
};