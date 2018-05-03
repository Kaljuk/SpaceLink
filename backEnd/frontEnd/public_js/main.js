'use strict';

//import React from 'react';
//import ReactDOM from 'react-dom';
//import MainContainer from 'MainContainer';

var renderMain = document.getElementById('mainContainer');

ReactDOM.render(React.createElement(
    'h1',
    null,
    'Hello',
    React.createElement(MainContainer, null)
), renderMain);