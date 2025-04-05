import NavigationBar from '../portfolioapplication/NavigationBar'; 
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <NavigationBar/>
        <Outlet/>
      
    </div>
  )
}

export default RootLayout
