<template>
    <div class="editor-wrap" v-if="(type == 'markdownit')">
        <div ref="editorMain" class="editor-main-wrap" contentEditable="true" :style="{ height: height, width: width}" @keyup="handleChange"></div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'richtext',
            validator(value) {
                return ['richtext', 'markdownit'].includes(value)
            }
        },
        height: {
            type: String,
            default: '1000px'
        },
        width: {
            type: String,
            default: '500px'
        }
    },
    data() {
        return {
            data: `123 \n+ 1 \n+ 2`
        }
    },
    mounted(){
        this.$refs.editorMain.innerText = this.data
        this.$emit('change',this.data)
    },
    methods:{
        handleChange(){
            this.data = this.$refs.editorMain.innerText
            this.$emit('change',this.data)
        }
    }
}
</script>