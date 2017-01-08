import marked from 'marked';
import xss from 'xss';

export function redirectURL(url){
  location = url;
}

//另须在显示模块加入highlight样式的css
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

export function renderMarkdown(text){
  return xss(marked(text));
}