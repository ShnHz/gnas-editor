<template>
  <div class="markdown-it">
    <Editor type="markdownit" ref="editor" @change="handleChange" />
    <div class="mark-down-it-view-wrap">
      <MarkdownItView v-bind="$props" :source="source" />
    </div>
  </div>
</template>
<script setup name="MarkdownIt">
import MarkdownItView from './MarkdownItView.vue'
import Editor from '../common/Editor.vue'

const props = defineProps({
  anchor: {
    type: Object,
    default: () => ({})
  },
  breaks: {
    type: Boolean,
    default: false
  },
  emoji: {
    type: Object,
    default: () => ({})
  },
  highlight: {
    type: Object,
    default: () => ({})
  },
  html: {
    type: Boolean,
    default: false
  },
  langPrefix: {
    type: String,
    default: 'language-'
  },
  linkify: {
    type: Boolean,
    default: false
  },
  plugins: {
    type: Array,
    default: () => []
  },
  quotes: {
    type: String,
    default: '“”‘’'
  },
  tasklists: {
    type: Object,
    default: () => ({})
  },
  toc: {
    type: Object,
    default: () => ({})
  },
  typographer: {
    type: Boolean,
    default: false
  },
  xhtmlOut: {
    type: Boolean,
    default: false
  }
})
// source
let source = ref('')
let handleChange = (value) => {
  source.value = value
}
</script>