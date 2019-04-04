// @flow
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Root from '~/components/Root'
import { store } from '~/store'
import loadSafesFromStorage from '~/routes/safe/store/actions/loadSafesFromStorage'

store.dispatch(loadSafesFromStorage())

ReactDOM.render(<Root />, document.getElementById('root'))
