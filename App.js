import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact'
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path : "/",
            element : <AppLayout/>,
            errorElement : <Error/>,
            children :[
                {
                    path : '/',
                    element : <Body/>
                },
                {
                    path : "/about",
                    element : <About/>,
                },
                {
                    path : "/contact",
                    element : <Contact/>
                },
                {
                    path : '/city/chandigarh/:resId',
                    element : <RestaurantMenu/>
                }
            ]
        }
    ]
)



// const App = () => {
//   return (
//     <BrowserRouter>
//     <Header></Header>
//     <Routes>
//         <Route path="/" element={<Body/>}/>
//         <Route path="/res/:resId" element={<h1>This is res</h1>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

const root = ReactDOM.createRoot(document.getElementById('root')); // 
root.render(<RouterProvider router = {appRouter}/>);


// root.render(<App/>)

