export const PostMenu = {
    template: `#post-menu`,
    props: ['username'],
    data() {
        return {
            postSelectedMenuItem: '',
            postMenuItems: '',
        };
    },
    computed: {
        getPostMenu(){
            let menu = [
                // { text: `Follow @${this.username}`, icon: 'mdi-account-plus' },
                { text: `Mute Post From @${this.username}`, icon: 'mdi-volume-off' },
                { text: `Block @${this.username}`, icon: 'mdi-block-helper' },
                { text: 'Embed Post', icon: 'mdi-code-tags' },
                { text: 'Report Post', icon: 'mdi-alert-octagon' },
            ]
            return menu
        }
    },
    mounted(){
    }
};