
import { TodoList, CoverInterface } from '../component'
import styles from './App.module.css'
import { withLayout } from './../layout/Layout'
import { useState } from 'react'
import { Provider } from 'react-redux'
function App() {

  return (
    <div className={styles.App}>
      <TodoList />
      <CoverInterface />
    </div>

  )
}

export default withLayout(App)
