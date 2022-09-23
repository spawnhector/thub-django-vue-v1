
export const PhotoVideoPostForm = {
    template: `
    <div >
        <input hidden name="post_type" value="photo_video" />
        <v-file-input
            v-model="filelist"
            :class="{createpostphotovideo: filelistsrc.length > 4}"
            small-chips
            multiple
            name="file"
            label="Upload Images"
        ></v-file-input>
        <template>
            <v-row :class="{postphotoscrolling: filelistsrc.length > 0}">
                <v-col
                    v-for="(file, index) in filelistsrc"
                    :key="'post-img-'+index"
                    class="d-flex child-flex"
                    cols="4"
                >
                    <v-hover v-slot="{ hover }">
                        <v-img
                            :src="file"
                            :lazy-src="file"
                            v-ripple
                            class="post-img elevation-1 lighten-2"
                            @click="imageOption(index)"
                        >
                            <template v-slot:placeholder>
                                <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                >
                                    <v-progress-circular
                                        indeterminate
                                        color="grey lighten-5"
                                    ></v-progress-circular>
                                </v-row>
                            </template>
                            <v-fade-transition>
                                <div v-show="showOption != null && showOption == index">
                                    <v-expand-transition>
                                        <v-btn
                                            v-if="hover"
                                            class="preview rounded-tr-xl"
                                            outlined
                                            @click="myDialogOpen(index)"
                                        >
                                            preview
                                        </v-btn>
                                    </v-expand-transition>
                                    <preview-dialog 
                                        @close="myDialogClose" 
                                        :preview="preview"
                                        :dialogVisible="myDialogVisible"
                                        :hover="hover" 
                                        :index="index" 
                                        :file="file"
                                    ></preview-dialog>
                                    <div class="text-center text-no-wrap remove">
                                        <v-btn
                                            class="mx-2"
                                            fab
                                            dark
                                            small
                                            color="primary"
                                            @click="removeImage(index)"
                                        >
                                            <v-icon dark>
                                                mdi-minus
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-fade-transition>
                        </v-img>
                    </v-hover>
                </v-col>
            </v-row>
        </template>
        
    </div>
    `,
    props: [],
    data() {
        return {
            showOption: null,
            filelist: [],
            filelistsrc: [],
            myDialogVisible: false,
            preview: ''
        };
    },
    created(){
        this.$watch('filelist',function(newlist){
            let srcs = []
            newlist.forEach(element => {
                srcs.push(URL.createObjectURL(element))
            });
            this.filelistsrc = srcs;
            this.showOption = null
            srcs.length > 0 ? this.$emit('formisvalid') : false;
            srcs.length == 0  ? this.$emit('formisnotvalid') : false;
        })
    },
    methods:{
        imageOption(id){
            if (this.showOption == id) {
                this.showOption = null
            } else {
                this.showOption = id
            }
        },
        removeImage(id){
            this.filelist = this.filelist.filter((val,key)=>{
                return key != id
            })
        },
        myDialogOpen(id){
            this.preview = id
            this.myDialogVisible = true
        },
        myDialogClose () {
            this.myDialogVisible = false
        }
    },
    mounted(){
        this.$emit('formisnotvalid')
    }
};