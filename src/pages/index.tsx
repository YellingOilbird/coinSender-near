import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import {LayoutLoader} from "../shared/ui/Loader/Layout";
import {Layout} from "../shared/ui/Layout";

const Home = lazy(() => import ('./Home'));
const Verify = lazy(() => import ('./Verify'));
const Send = lazy(() => import ('./Send'));
const Vault = lazy(() => import ('./Vault'));
const Donate = lazy(() => import ('./Donate'));

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
                    {/* processing/verify/guacharo.testnet?transactionHashes=6mJKktW6RqnRg3uysZmCjSF52U6JSeb4CSZnmEFzuY98 */}
                    <Route
                        path="/processing/send/:coin"
                        element={
                           <Suspense fallback={ <LayoutLoader /> }>
                              <Send />
                           </Suspense>
                        }
                    />

                    <Route
                        path="/vault"
                        element={
                           <Suspense fallback={ <LayoutLoader /> }>
                              <Vault />
                           </Suspense>
                        }
                    />
                    <Route
                        path="/donate"
                        element={
                           <Suspense fallback={ <LayoutLoader /> }>
                              <Donate />
                           </Suspense>
                        }
                    />
                </Route>
            }
         </Routes>
      </div>
   )
}