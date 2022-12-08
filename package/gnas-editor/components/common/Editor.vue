<template>
    <div class="editor-wrap" v-if="(type == 'markdownit')">
        <button @click="selectionChange">test</button>
        <div ref="editorMain" class="editor-main-wrap" contentEditable="true" :style="{ height: height, width: width }"
            @keyup="handleChange"></div>
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
            data: `123 \n+ 1 \n+ 2`,
            editor: null
        }
    },
    mounted() {
        this.editor = this.$refs.editorMain
        this.editor.innerText = this.data
        this.$emit('change', this.data)
    },
    methods: {
        handleChange() {
            this.data = this.editor.innerText
            this.$emit('change', this.data)
        },
        selectionChange() {
            let selectionStr = getSelection()
            let replaceSelection = this.getReplaceSelection(selectionStr)
        },
        // 获取选中值
        getSelection() {
            let selectionStr = null
            if (window.getSelection) {
                selectionStr = window.getSelection().toString()
            } else if (document.selection) {
                selectionStr = document.selection.toString()
            }

            return selectionStr
        },
        // 获取替换值
        getReplaceSelection(selectionStr){
            return selectionStr
        }
    }
}
</script>