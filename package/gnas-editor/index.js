import VueMarkdownIt from './components/markdownit/MarkdownIt.vue';
import '../gnas-editor/public/css/gnas-editor.scss';
import '../gnas-editor/public/css/mark-down-it-view.scss';

const install = (Vue) => {
    Vue.component(VueMarkdownIt.name, VueMarkdownIt);
};

VueMarkdownIt.install = install;

export default VueMarkdownIt;