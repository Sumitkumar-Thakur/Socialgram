import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

import './globals.css';
export const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout/>}>    

            <Route path='/sign-in' element={ <SigninForm />} />
            <Route path='/sign-up' element={ <SignupForm />} />
            
            </Route>

            <Route element={<RootLayout/>}>
            {/* private routes */}
            <Route index element={<Home/>} /> {/* index is the default route */}
            
            </Route>
        </Routes>
    </main>
  )
}

export default App