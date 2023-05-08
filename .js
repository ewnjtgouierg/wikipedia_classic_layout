var nav = document.querySelector('#mw-panel-toc');
var anchor = document.querySelector('[property="mw:PageProp/toc"]');
anchor.parentNode.insertBefore(nav, anchor);

var languages = document.querySelector('.vector-page-titlebar .mw-portlet-lang > .vector-menu-content');
var leftColumn = document.querySelector('#mw-navigation');
leftColumn.appendChild(languages);

document.querySelector('#p-lang-btn').remove();
