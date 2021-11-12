import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

/*
 * Importacion de la Functional Component
 * */
import CounterApp from './CounterApp';

/*
 * Instancia del div root
 * */
const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp value={ 10 }/>, divRoot);
