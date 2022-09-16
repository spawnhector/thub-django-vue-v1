
let spacer = `<span class="seperate-lg mx-4"></span>`
let chip = `
    <div  class="flex-fix">
        <div v-if="tab == 'Trending'">
            <v-chip
                class="ma-2"
                color="orange"
                text-color="white"
                small
            >
                <span v-text="story.data.category"></span>
            </v-chip>
            ${spacer}
        </div>
        <div v-if="tab != 'Trending'">
            <div v-if="postIsTrending()">
                <v-chip
                    class="ma-2"
                    color="orange"
                    text-color="white"
                    small
                >
                    Trending
                </v-chip>
                ${spacer}
            </div>
        </div>
    </div>
`
let views = `<v-icon>mdi-eye</v-icon><span class="seperate"></span>{{postViews()}}`
export const VideoCardCommentHeader = {
    template: `
        <div class="flex-fix">
            ${chip}
            ${views}
        </div>
    `,
    props: ['tab','story'],
    data() {
        return {
        };
    },
    methods: {
        postIsTrending(){
            let trending = false
            if (this.story.data.views >= 1000) {
                trending = true
            }
            return trending
        },
        postViews(){
            return this.story.data.views
        }
    },
    mounted(){
        console.log(this.story)
    }
};