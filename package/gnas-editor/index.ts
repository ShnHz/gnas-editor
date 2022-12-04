import VueMarkdownIt from './components/markdownit/markdown-it.vue';

const install = (Vue: any) => {
    Vue.component(VueMarkdownIt.name, VueMarkdownIt);
};

VueMarkdownIt.install = install;

export default VueMarkdownIt;