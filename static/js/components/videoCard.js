import StartStoryCard from "./videoPlayer.js";
export const VideoCard = {
    template: `
        <div class="body">
            <div class="containerr">
                <video src="https://assets.codepen.io/2629920/gt3.mp4" class="video" :class="classObject.video" playsinline autoplay loop muted></video>
                <div class="right">

                </div>
                <div class="bottom">
                    <span class="progress-duration" :class="classObject.progressDuration"></span>
                    <div class="progress-range" :class="classObject.progressRange" title="seek">
                        <div class="progress-bar" :class="classObject.progressBar"></div>
                    </div>
                    
                    <div class="icons">
                        
                    <div class="icons-item">
                        <span class="icon">
                            <img src="https://assets.codepen.io/2629920/heart.png" alt="" v-bind:id="idObject.likesIcon">
                        </span>
                        <span class="icon-label likes right-label" :class="classObject.likes" data-likes='999'>999</span>
                    </div>
                    <div class="icons-item">
                        <span class="icon">
                            <img src="https://assets.codepen.io/2629920/chat.png" alt=""  v-bind:id="idObject.commentIcons">
                        </span>
                        <span class="icon-label comments right-label"></span>
                    </div>
                    <div class="icons-item">
                        <span class="icon">
                            <img src="https://assets.codepen.io/2629920/share.png" alt="" v-bind:id="idObject.shareIcons">
                        </span>
                        <span class="icon-label shares right-label">94</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `,
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
           }
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