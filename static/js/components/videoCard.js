import StartStoryCard from "./videoPlayer.js";
export const VideoCard = {
    template: `#video-card`,
    props: ['tab','story','cardkey','cardsDisplayed','pydata','user'],
    data() {
        return {
           classObject: {
                video: {
                    [this.cardkey+'-video']: this.cardkey
                },
                progressDuration: {
                    [this.cardkey+'-progress-duration']: this.cardkey
                },
                progressRange: {
                    [this.cardkey+'-progress-range']: this.cardkey
                },
                progressBar: {
                    [this.cardkey+'-progress-bar']: this.cardkey
                },
                commentsHeadLabel: {
                    [this.cardkey+'-comments-head-label']: this.cardkey
                },
                comments: {
                    [this.cardkey+'-comments']: this.cardkey
                },
                commentsList: {
                    [this.cardkey+'-comments-list']: this.cardkey
                },
                overlay: {
                    [this.cardkey+'-overlay']: this.cardkey
                },
                commentContainer: {
                    [this.cardkey+'-comments-containerr']: this.cardkey
                },
                commentsHeadClose: {
                    [this.cardkey+'-comments-head-close']: this.cardkey
                },
                likesIcon: {
                    [this.cardkey+'-likes-icon']: this.cardkey
                },
                howToClose: {
                    [this.cardkey+'-howto-close']: this.cardkey
                },
                likes: {
                    [this.cardkey+'-likes']: this.cardkey
                },
           },
           idObject: {
                likesIcon: `${this.cardkey}-likes-icon`,
                commentIcons: `${this.cardkey}-comments-icon`,
                shareIcons: `${this.cardkey}-share-icon`
           },
           activeVideo: false
        };
    },
    mounted(){
        let _this = this
        let pydata = _this.pydata
        let user = _this.user
        let data = {
            pydata,
            user
        }
        this.$nextTick(function () {
            document.querySelector(`.${_this.tab}-slider`).addEventListener('scroll',function(){
                _this.$emit('updatecardsdisplayedevent', _this.cardkey)
                StartStoryCard(_this.cardkey,_this.cardsDisplayed.recentCard,data,_this)
            })
            StartStoryCard(this.cardkey,'',data,_this)

        })
    }
};