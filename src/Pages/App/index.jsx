import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import MyAccount from '../MyAccount'
import SignIn from '../SignIn'
import NotFound from '../NotFound'


import '../App.css'

const AppRoutes = ()=>{
  let routes = useRoutes([
    {path:"/", element: <Home />},
    {path:"/my-orders", element: <MyOrders />},
    {path:"/my-order", element: <MyOrder />},
    {path:"/my-account", element: <MyAccount />},
    {path:"/sign-in", element: <SignIn />},
    {path:"/*", element: <NotFound />}
  ])

  return routes
}

function App() {

  return (
    <>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
