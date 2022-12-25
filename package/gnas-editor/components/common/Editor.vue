<template>
    <div class="editor-wrap" v-if="(type == 'markdownit')">
        <button @click="selectionChange('h1')">h1</button>
        <button @click="selectionChange('h2')">h2</button>
        <button @click="selectionChange('h3')">h3</button>
        <button @click="selectionChange('h4')">h4</button>
        <button @click="selectionChange('h5')">h5</button>
        <button @click="selectionChange('h6')">h6</button>
        <button @click="selectionChange('quote')">quote</button>
        <button @click="selectionChange('code')">code</button>
        <button @click="selectionChange('b')">b</button>
        <button @click="selectionChange('em')">em</button>
        <button @click="selectionChange('strikethrough')">strikethrough</button>
        <div ref="editor" class="editor-main-wrap" contentEditable="true" :style="{ height: height, width: width }"
            @keyup="handleChange">
        </div>
    </div>
</template>
<script setup name="Editor">
const props = defineProps({
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
})
const emit = defineEmits(['change'])

const source = ref('')
const editor = ref(null)

onMounted(() => {
    editor.value.innerText = source.value
    emit('change', source.value)
})

const handleChange = () => {
    source.value = editor.value.innerText
    emit('change', source.value)
}
const selectionChange = (type) => {
    let { selectionStr, selection } = getSelection()
    if (selectionStr.trim() != "") {
        let replaceSelection1 = replaceSelection(type, selectionStr)

        handleChange()
    }
}

// 获取选中值
const getSelection = () => {
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
}

// 获取替换值
const replaceSelection = (type, selectionStr) => {
    switch (type) {
        case 'h1':
            document.execCommand('insertText', false, `# ${selectionStr}`)
            break
        case 'h2':
            document.execCommand('insertText', false, `## ${selectionStr}`)
            break
        case 'h3':
            document.execCommand('insertText', false, `### ${selectionStr}`)
            break
        case 'h4':
            document.execCommand('insertText', false, `#### ${selectionStr}`)
            break
        case 'h5':
            document.execCommand('insertText', false, `##### ${selectionStr}`)
            break
        case 'h6':
            document.execCommand('insertText', false, `###### ${selectionStr}`)
            break
        case 'quote':
            document.execCommand('insertText', false, `> ${selectionStr}`)
            break
        case 'code':
            document.execCommand('insertText', false, `\`\`\`
${selectionStr}
\`\`\``)
            break
        case 'b':
            document.execCommand('insertText', false, `***${selectionStr}***`)
            break
        case 'em':
            document.execCommand('insertText', false, `*${selectionStr}*`)
            break
        case 'strikethrough':
            document.execCommand('insertText', false, `~~${selectionStr}~~`)
            break
        default:
            return selectionStr
    }
}
</script>