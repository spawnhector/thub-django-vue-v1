
let imgTextSubTextBanner = `
    <v-hover
    v-slot="{ hover }"
    close-delay="200"
    >
        <v-card
            class="mx-auto rounded-0"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            raised
        >
            <v-img
                class="white--text align-end"
                height="100px"
                :src="currentBanner.banner_data.src"
            >
                <v-card-title>
                    {{currentBanner.banner_data.img_text}}
                </v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">
                {{currentBanner.banner_data.sub_title}}
            </v-card-subtitle>
            <v-card-text class="text--primary">
                <div>{{currentBanner.banner_data.text}}</div>
            </v-card-text>
        </v-card>
    </v-hover>
`
let imgTextNoSubTextBanner = `
    <v-hover
    v-slot="{ hover }"
    close-delay="200"
    >
        <v-card
            class="mx-auto rounded-0"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            raised
        >
            <v-img
                class="white--text align-end"
                height="100%"
                :src="currentBanner.banner_data.src"
            >
                <v-card-title>{{currentBanner.banner_data.img_text}}</v-card-title>
            </v-img>
        </v-card>
    </v-hover>
`
export const RightBarBanner = {
  template: `
<Transition>
    <div class="banner-container">
        <div v-if="currentBanner.banner_type == 'img'">
            <div v-if="currentBanner.banner_subtype == 'img-text-subtext'">
                ${imgTextSubTextBanner}
            </div>
            <div v-if="currentBanner.banner_subtype == 'img-text-no-subtext'">
                ${imgTextNoSubTextBanner}
            </div>
        </div>
    </div>
</Transition>
  `,
    props: ['pydata'],
    data() {
        return {
            advertBannersList: [
                {
                    banner_type: 'img',
                    banner_subtype: 'img-text-subtext',
                    banner_data: {
                        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                        img_text: 'Australian beaches',
                        sub_title: 'Number 10',
                        text: 'Whitehaven Beach'
                    }
                },
                {
                    banner_type: 'img',
                    banner_subtype: 'img-text-no-subtext',
                    banner_data: {
                        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                        img_text: 'Australian beaches',
                    }
                }
            ],
            currentBanner : '',
            intervalid1:'',
        };
    },
    computed: {
    },
    beforeDestroy () {
        clearInterval(this.intervalid1)
    },
    methods: {
        getAdvert : function(){     
            let _this1 = this     
            this.intervalid1 = setInterval(function(){
                this.changes = _this1.advertBannersList[Math.floor(Math.random() * _this1.advertBannersList.length)];
                _this1.currentBanner = this.changes;
                // console.log(_this1.currentBanner)
            }, 6000);
        }
    },
    mounted(){
        this.changes = this.advertBannersList[Math.floor(Math.random() * this.advertBannersList.length)];
        this.currentBanner = this.changes;
        this.getAdvert()  
    }
};