export const CommentAvatar = {
    template: `#post-comment-avatar`,
    props: ['comments'],
    data() {
        return {
            avatars: [],
            darkMode: true,
            menuMaxHeight: `${(60 * 5) + 4}px`,
            presence: false,
            stackedLimit: 6,
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
                        presence: 'Online',
                        role: comment.user.username,
                        src: comment.user.avatar
                    }
                });
            }
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
    mounted(){
        // console.log(this.comments)
    }
};