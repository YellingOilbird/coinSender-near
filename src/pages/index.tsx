import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import {LayoutLoader} from "../shared/ui/Loader/Layout";
import {Layout} from "../shared/ui/Layout";

const Home = lazy(() => import ('./Home'));
const Verify = lazy(() => import ('./Verify'));
const Send = lazy(() => import ('./Send'));

export const Router = () => {
   return(
      <div className="container">
         <Routes>
            <Route
               path="/"
               element={
                  <Suspense fallback={ <LayoutLoader /> }>
                     <Home />
                  </Suspense>
               }
            />

            {window.accountId !== '' &&
                <Route element={<Layout />}>
                    <Route
                        path="/processing/verify/:coin"
                        element={
                           <Suspense fallback={ <LayoutLoader /> }>
                              <Verify />
                           </Suspense>
                        }
                    />

                    <Route
                        path="/processing/send/:coin"
                        element={
                           <Suspense fallback={ <LayoutLoader /> }>
                              <Send />
                           </Suspense>
                        }
                    />
                </Route>
            }
         </Routes>
      </div>
   )
}