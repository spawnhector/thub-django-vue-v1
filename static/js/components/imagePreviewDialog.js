const previewContentEditor = `
<div class="preview-editor-top">
    <v-chip>
        <template>
            <v-row justify="space-around">
                <div>
                    <v-btn
                        icon
                        @click="closeDialog"
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </div>
                <v-divider vertical></v-divider>
                <v-btn
                    v-for="(opt,index) in previewEditorTopOpt"
                    :key="index"
                    icon
                    :color="opt.color"
                >
                    <v-icon>{{opt.icon}}</v-icon>
                </v-btn>
            </v-row>
        </template>
    </v-chip>
</div>
`

const previewContent = `
    <v-row>
        <v-col
            cols="12"
            sm="6"
            md="8"
        >
            <div class="preview-img">
                <v-card
                    class="mx-auto"
                    max-width="800"
                    outlined
                >
                    <v-img
                    :src="file"
                    >
                    </v-img>
                </v-card>
            </div>
        </v-col>
        <v-col
            cols="6"
            md="4"
            class="preview-left"
        >
            <v-card
            class="pa-2 preview-left-content"
            >
                ${previewContentEditor}
            </v-card>
        </v-col>
    </v-row>
`

export const PreviewDialog = {
    template: `
    <v-dialog
      v-model="intDialogVisible"
      persistent
      fullscreen
      hide-overlay
      scrollable="false"
    >
        <lazy-image
            :src="file"
            :preview-src="file"
        >
            ${previewContent}
        </lazy-image>
    </v-dialog>
    `,
    props: ['preview','dialogVisible','index','file','hover'],
    data() {
        return {
            previewEditorTopOpt: [
                {
                    icon: 'mdi-magnify-plus-cursor',
                    color: '#424242'
                },
                {
                    icon: 'mdi-magnify-minus-cursor',
                    color: '#424242'
                },
                {
                    icon: 'mdi-history',
                    color: '#424242'
                },
                {
                    icon: 'mdi-undo-variant',
                    color: '#424242'
                },
                {
                    icon: 'mdi-redo-variant',
                    color: '#424242'
                },
            ]
        };
    },
    computed: {
        intDialogVisible: {
            get: function () {
                if (this.dialogVisible && this.preview == this.index) {
                    return this.dialogVisible
                }
            },
            set: function (value) {
                if (!value) {
                    this.$emit('close', '')
                }
            }
        }
    },
    methods:{
        closeDialog(){
            this.$emit('close', '')
        }
    },
    mounted(){
    }
};