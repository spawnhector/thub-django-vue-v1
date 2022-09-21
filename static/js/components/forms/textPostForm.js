export const TextPostForm = {
    template: `
        <div>
            <input hidden name="post_type" value="text"/>
            <div class="fieldWrapper">
                <v-text-field
                    v-model="form.title"
                    :rules="titleRules"
                    class="create-post-title effect-3"
                    :counter="counter" 
                     dense
                     label="Post Title"
                ></v-text-field>
            </div>
            <div class="fieldWrapper">
                <v-textarea
                    v-model="form.body"
                    name="body"
                    value=""
                    hint="Hint text"
                    class="create-post-body effect-3"
                    :rules="bodyRules"
                    :counter="counter"
                    clearable
                     dense
                     label="Post Content"
                ></v-textarea>
            </div>
        </div>
    `,
    props: [],
    data() {
        const defaultForm = Object.freeze({
            title: '',
            body: ''
        })
        return {
            form: Object.assign({}, defaultForm),
            counter: 200,
            bodyRules: [v => v.length <= this.counter || `Max ${this.counter} characters`],
            titleRules: [v => v.length <= this.counter || `Max ${this.counter} characters`],
            wordsRules: [v => v.trim().split(' ').length <= 5 || 'Max 5 words'],
            defaultForm,
        };
    },
    created(){
        this.$watch('form.body',function(bodyText){
            this.formIsValid()
        })
    },
    computed: {
    },
    methods: {
        formIsValid () {
            this.form.title && this.form.body ? this.$emit('formisvalid') : false;
            !this.form.title || !this.form.body ? this.$emit('formisnotvalid') : false;
        },
    },
    mounted(){
    }
};