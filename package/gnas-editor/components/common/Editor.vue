<template>
    <div class="editor-wrap" v-if="(type == 'markdownit')">
        <button @click="selectionChange('h1')">test</button>
        <div ref="editorMain" class="editor-main-wrap" contentEditable="true" :style="{ height: height, width: width }"
            @keyup="handleChange">
        </div>
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
        selectionChange(type) {
            let { selectionStr, selection } = this.getSelection()
            if (selectionStr.trim() != "") {
                let replaceSelection = this.replaceSelection(type, selectionStr)

                this.handleChange()
            }
        },
        // 获取选中值
        getSelection() {
            let selection = null
            if (window.getSelection || document.getSelection()) {
                selection = (window.getSelection() || document.getSelection())
            } else if (document.selection) {
                selection = document.selection
            }

            return {
                selection: selection,
                selectionStr: selection.toString()
            }
        },
        // 获取替换值
        replaceSelection(type, selectionStr) {
            switch (type) {
                case 'h1':
                    document.execCommand('insertText', false, `# ${selectionStr}`)
                    break
                case 'h2':
                    document.execCommand('insertText', false, `##${selectionStr}`)
                    break
                case 'h3':
                    document.execCommand('insertText', false, `###${selectionStr}`)
                    break
                case 'h4':
                    document.execCommand('insertText', false, `####${selectionStr}`)
                    break
                case 'h5':
                    document.execCommand('insertText', false, `#####${selectionStr}`)
                    break
                case 'h6':
                    document.execCommand('insertText', false, `######${selectionStr}`)
                    break
                default:
                    return selectionStr
            }
        }
    }
}
</script>