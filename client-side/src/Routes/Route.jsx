import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ExploreGardeners from "../Pages/ExploreGardeners/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips/BrowseTips";
import PrivateRoutes from "../Providers/PrivateRoutes";
import ShareTip from "../Pages/ShareTip/ShareTip";
import MyTip from "../Pages/MyTip/MyTip";
import TipDetails from "../Pages/TipDetails/TipDetails";
import Error from "../Pages/Error/Error";


export const router=createBrowserRouter([
    {path:"/",
        Component:Layout,
        children:[
            {path:"/",
                loader:()=>fetch('http://localhost:3000/gardeners'),
                Component:Home},
            {path:'login',Component:Login},
            {path:'register',Component:Register},
            {path:'exploregardeners',
                 loader:()=>fetch('http://localhost:3000/gardeners'),
                Component:ExploreGardeners},
            {path:'browsetips',
                loader:()=>fetch('http://localhost:3000/gardentips'),
                element:<PrivateRoutes>
                    <BrowseTips></BrowseTips>
                </PrivateRoutes>},
            {path:'sharetip', element:<PrivateRoutes>
                <ShareTip></ShareTip>
            </PrivateRoutes>},
            {path:'mytip',
                loader:()=>fetch('http://localhost:3000/sharedata'),
                element:<PrivateRoutes>
                    <MyTip></MyTip>
                </PrivateRoutes>},
            {path:'tipdetails/:_id',
                loader:()=>fetch('http://localhost:3000/gardentips'),
                element:<PrivateRoutes>
                    <TipDetails></TipDetails>
                </PrivateRoutes>},
              {path:"*", Component:Error}

        ]
    }
])