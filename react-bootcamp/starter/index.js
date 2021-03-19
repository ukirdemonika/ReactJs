import React from 'react';
import ReactDOM from 'react-dom';

const element=React.createElement('div',null,'React element !'); //instead of nulll we can use props name

ReactDOM.render(element,document.getElementById("root"));