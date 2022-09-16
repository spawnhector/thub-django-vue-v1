export default function StartStoryCard(key,recentCard,data,_this){
    function createCard(){
        let likesAmount = "";
        const video = document.querySelector(`.${key}-video`);
        const duration = document.querySelector(`.${key}-progress-duration`);
        const range = document.querySelector(`.${key}-progress-range`);
        const bar = document.querySelector(`.${key}-progress-bar`);
        const commentsContainer = document.querySelector(`.${key}-comments-containerr`);
        const likes = document.querySelector(`.${key}-likes`);

        (() => {
            video.pause();
            video.style.cursor = "pointer";
        })();

        function displayTime(time) {
            const mins = Math.floor(time / 60); // devide (time | given) by 60 (mins)
            let seconds = Math.floor(time % 60); // remainder of (time | given) divided by 60
            seconds = seconds <= 9 ? `0${seconds}` : seconds;
            return `${mins}:${seconds}`;
        }

        function updateProgress() {
            bar.style.width = `${(video.currentTime / video.duration) * 100}%`;
            duration.textContent = `${displayTime(video.currentTime)} : ${displayTime(
                video.duration
            )}`;
        }

        function setProgress(e) {
            const time = e.offsetX / range.offsetWidth; // get percentage where clicked and devide by duration
            bar.style.width = `${time * 100}%`;
            video.currentTime = time * video.duration;
        }

        function activateComments() {
            video.pause();
            if (video.pause) {
                video.style.cursor = "pointer";
            }
        }

        function startVideo() {
            if (!_this.activeVideo) {
                if (video.pause) {
                    _this.activeVideo = key
                    video.play();
                    video.style.cursor = "default";
                    return
                }
            } 
            if(_this.activeVideo && _this.activeVideo === key) {
                video.pause();
                _this.activeVideo = !_this.activeVideo
            }
        }
        
        function endVideo(){
            if(_this.activeVideo && _this.activeVideo === key) {
                video.pause();
                _this.activeVideo = !_this.activeVideo
                console.log(_this.activeVideo)
            }
        }

        range.addEventListener("click", setProgress);
        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("canplay", updateProgress);
        video.addEventListener("click", startVideo);

        function auth(){
            if (data.user == "AnonymousUser") {
                _this.$emit('triggerloginmodal')
                return false
            }else{
                return true
            }
        }
        function updateLikes() {
            if (auth()) {
            if (likesAmount >= 1000) return;
            likesIcon.src = `https://assets.codepen.io/2629920/heart+%281%29.png`;
            likesAmount = likesAmount + 1;
            likes.textContent = `${likesAmount === 1000 ? "1K" : likesAmount}`;
            }
        }
        function updateComments(){
            if (auth()) {
                alert(data.user)
            }
        }
        function updateShares(){
            if (auth()) {
                alert(data.user)
            }
        }
        const commentsIcon = document.getElementById(`${key}-comments-icon`);
        const sharesIcon = document.getElementById(`${key}-share-icon`);
        const likesIcon = document.getElementById(`${key}-likes-icon`);
        if(likesIcon) likesIcon.addEventListener("click", updateLikes);
        if(commentsIcon) commentsIcon.addEventListener("click", updateComments);
        if(sharesIcon) sharesIcon.addEventListener('click', updateShares);
        
        
    }

    if (recentCard) {
        if (key != recentCard) {
            let recentVideo = document.querySelector(`.${recentCard}-video`);
            recentVideo.pause()
            recentVideo.style.cursor = "pointer";
        }
    }else{
        createCard()
    }
}