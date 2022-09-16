export const VideoCardComment = {
    template: `#video-card-comment`,
    props: ['story','tab'],
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
        },
        getCommentChipIcons(storyType){
            
            return ico
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