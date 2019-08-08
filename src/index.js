import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
(function (doc, win) {

    var docEl = doc.documentElement,

        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

        recalc = function () {

            var clientWidth = docEl.clientWidth;

            if (!clientWidth) return;

            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';

            /*docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';*/

        };

    if (!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);

    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
