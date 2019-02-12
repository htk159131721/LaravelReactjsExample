
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import UserList from './components/ShowlistCustomers'
import CreateCus from './components/CreateCus'
import EditCus from './components/EditCus'

const history = createBrowserHistory();
render (
  <Router history={history}>
    <Switch>
      <Route path='/' component={UserList} />
      <Route path='/customers/create' component={CreateCus} />
      <Route path='/customers/edit/:id' component={EditCus} />
    </Switch>
  </Router>, 
  document.getElementById('app')
)