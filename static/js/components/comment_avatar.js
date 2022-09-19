export const CommentAvatar = {
    template: `#post-comment-avatar`,
    props: ['comments'],
    data() {
        return {
            avatars: [],
            darkMode: true,
            menuMaxHeight: `${(60 * 5) + 4}px`,
            presence: false,
            stackedLimit: 3,
            stackedMenu: false
        };
    },
    computed: {
        avatarsSorted () {
            let postComments = JSON.parse(this.comments)
            if (postComments && postComments.length > 0) {
                this.avatars = postComments.map(comment => {
                    return {
                        alt: comment.user.full_name,
                        id: comment.id,
                        presence: false,
                        role: comment.user.username,
                        src: comment.user.avatar,
                        user_id: comment.user.id
                    }
                });
            }
            return (this.avatars && this.avatars.length > 0)
                ? this.avatars.sort((a, b) => a.alt.localeCompare(b.alt))
                : null
        },
        avatarsOrganized(){
            let sort = this.avatarsSorted
            let organized = [];
            sort.map((a)=>{
                let check = sort.filter(b =>{
                    return a.user_id == b.user_id
                })
                if(check.length > 1){
                    organized.push({
                        ...a,
                        organized: check.length
                    })
                    sort = sort.filter(c=>{
                        return c.user_id != a.user_id
                    })
                }
                if(check.length == 1){
                    organized.push({
                        ...a
                    })
                    sort = sort.filter(c=>{
                        return c.user_id != a.user_id
                    })
                }
            });
            return organized;
        },
        avatarsStackedLimited () {
            let sort = this.avatarsOrganized
            return (sort && sort.length > 0)
                ? sort.slice(0, this.stackedLimit)
                : null
        }
    },
    mounted(){
        // console.log(this.comments)
    }
};