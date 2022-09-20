export const ChipGroup = {
    template: `#post-chip-group`,
    props: ['tab','tags','moreTags'],
    data() {
        return {
            allTags: '',
            postCategory: ''
        };
    },
    created() {
        // this.postCategory = 
        this.$watch('postCategory', (category) => {
            let postCategory = document.getElementById('post_category_id')
            postCategory.value = this.allTags[category]
        })
        this.$watch('tab', (newtab) => {
            let blog_tab = newtab == 0,
            video_tab = newtab == 1,
            live_tab = newtab == 2,
            event_tab = newtab == 3;
            
            if (blog_tab) {this.postCategory = 2}
            if(video_tab) {this.postCategory = 1 }
            if(live_tab) {this.postCategory = 3 }
            if(event_tab) {this.postCategory = 0 }
        })
    },
    mounted(){
        let concatTags = JSON.parse(this.tags).concat(JSON.parse(this.moreTags))
        this.allTags = concatTags.filter(val=>{
            return val != 'Trending'
        })
    }
};