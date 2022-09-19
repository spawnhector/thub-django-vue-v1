export const ChipGroup = {
    template: `#post-chip-group`,
    props: ['tags','moreTags'],
    data() {
        return {
            allTags: '',
            postCategory: ''
        };
    },
    created() {
        this.$watch('postCategory', (category) => {
            let postCategory = document.getElementById('post_category_id')
            postCategory.value = this.allTags[category]
        })
    },
    mounted(){
        let concatTags = JSON.parse(this.tags).concat(JSON.parse(this.moreTags))
        this.allTags = concatTags.filter(val=>{
            return val != 'Trending'
        })
    }
};