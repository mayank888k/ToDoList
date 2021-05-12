import React from 'react';
import ReactDom from 'react-dom';
import Mainapp from "./Mainapp";
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';


ReactDom.render(
  <>
  <BrowserRouter>
  <Provider store = { store } >
  <Mainapp />
  </Provider>
  </BrowserRouter>
  </>,
  document.getElementById('root')
)
