import {Navbar} from "./components/Navbar.vue.js"
import {Main} from "./components/Main.vue.js"
import ReactVueWrapper from "./ReactVueWrapper.js";
import { CopyRightYear } from "./components/copyRightYear.js";
import { MainLoader } from "./components/mainLoader.js";
import { loadCSS } from "../utils/loadCSS.js";
import { RightBarBanner } from "./components/RightBarBanner.js";
import { LandingBody } from "./components/landingBody.js";
import { RightBarTreeView } from "./components/rightBarTreeView.js";
import { VideoCard } from "./components/videoCard.js";
import { VideoCardComment } from "./components/videoCardComment.js";
import { LoginModal } from "./components/modal/loginModal.js";
import { LoginPage } from "./pages/login.js";
if(document.getElementById('app')){
    Vue.component("Navbar", Navbar);
    Vue.component("thubmain", Main);
    Vue.component("copy-right", CopyRightYear);
    Vue.component("main-loader", MainLoader);
    Vue.component("video-card", VideoCard);
    Vue.component("video-card-comment", VideoCardComment);
    Vue.component("right-bar-banner", RightBarBanner);
    Vue.component("right-tree", RightBarTreeView);
    Vue.component("landing-body", LandingBody);
    Vue.component("react", ReactVueWrapper());
    Vue.component("login-modal", LoginModal);
    var app = new Vue({
        el: "#app",
        vuetify: new Vuetify(),
        data() {
            return {
                drawer: null,
                mini: true,
                mini_button_value: 1,
                main_loading: true,
                model: 0,
                modalShow: false
            };
        },
        computed: {
            mini_button_color () {
                switch (this.mini_button_value) {
                case 0: return 'blue-grey'
                case 1: return 'teal'
                case 2: return 'brown'
                case 3: return 'indigo'
                default: return 'blue-grey'
                }
            },
        },
        beforeDestroy () {
        },
        methods: {
            showModal(){
                this.modalShow = !this.modalShow;
            },
            closeModal(){
                this.modalShow = false
            }
        },
        mounted(){
        }
    });
}

if (document.getElementById('login')) {
    
    Vue.component("app-login", LoginPage);
    var login = new Vue({
        el: "#login",
        vuetify: new Vuetify(),
        data() {
            return {
            };
        },
        computed: {
        },
        beforeDestroy () {
        },
        methods: {
        },
        mounted(){
        }
    });
}