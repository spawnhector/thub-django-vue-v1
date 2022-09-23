export const TextPostForm = {
    template: `
        <div>
            <input hidden name="post_type" value="text"/>
            <div class="fieldWrapper">
                <v-text-field
                    v-model="form.title"
                    name="title"
                    :rules="titleRules"
                    class="create-post-title effect-3"
                    :counter="counter" 
                     dense
                     label="Post Title"
                    id="text-post-title"
                    value=""
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
                    id="text-post-body"
                    value=""
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
            originInputSize: false,
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
        checkInput(el){
            var val=el.scrollHeight;
            var h=el.offsetHeight;
            if(this.originInputSize == false) this.originInputSize = h;
            if(val>h){
                h=h+50
                el.style.height=`${h}px`;
            }
            if(el.value == '') el.style.height=`${this.originInputSize}px`;
        },
        formIsValid () {
            let input = document.getElementById('text-post-body')
            let input1 = document.getElementById('text-post-title')
            input1.value = this.form.title
            input.value = this.form.body
            this.form.title && this.form.body ? this.$emit('formisvalid') : false;
            !this.form.title || !this.form.body ? this.$emit('formisnotvalid') : false;
        },
    },
    mounted(){
        this.$emit('formisnotvalid')
        let _this = this
        _this.$nextTick(function(){
            let input = document.getElementById('text-post-body')
            if (input) {
                input.addEventListener('keyup', function(){
                    _this.checkInput(input)
                })
            }
        })
    }
};