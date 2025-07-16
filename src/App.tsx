import './App.css'
import { Route, Routes } from 'react-router'
import { AuthenticatedLayout } from './layouts/authenticated.layout'
import { LoginLayout } from './layouts/login.layout'
import { Login } from './components/login/login'
import { ForgotPassword } from './components/ForgotPassword/ForgotPassword'
import { NewPassword } from './components/NewPassword/NewPassword'
import { SupplyPointsPage } from './components/supplyPoints/SupplyPointsPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<LoginLayout/>}>
          <Route path='login' element={<Login/>}></Route>
          <Route path='forgot-password'>
            <Route index element={<ForgotPassword/>}></Route>
            <Route path=':token' element={<NewPassword/>}></Route>
          </Route>
        </Route> 
        <Route element={<AuthenticatedLayout/>}>
          {/* <Route index element={SupplyPointsPage}/> */}
          <Route path='supply-points' element={<SupplyPointsPage/>}/>

          
        </Route>
      </Routes>
    </>
  )
}

export default App
