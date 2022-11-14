import classnames from 'classnames'
import { Routes,  Route } from 'react-router-dom'
import './App.css'

import { AppLayout } from './components/AppLayout'
import { Deals } from './pages/Deals'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Panel } from './pages/Panel'
import { Signup } from './pages/Signup'

const AppClass = classnames({
  App: true
})

export function App () {
  return (
    <div className={AppClass}>
        <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/' element={ <AppLayout /> }>
            <Route path='meu-painel' element={ <Panel /> } />
            <Route path='promocoes-ativas' element={ <Deals /> } />
          </Route>
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
        </Routes>
    </div>
  )
}
