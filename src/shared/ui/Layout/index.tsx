import { Header } from 'widgets/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from 'widgets/Footer'

export const Layout = () => {
   return (
      <div>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer/>
      </div>
   )
}