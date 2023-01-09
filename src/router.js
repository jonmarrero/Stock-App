import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from './App';
import Main from './pages/main';
import Currencies from "./pages/currencies";
import Price from './pages/price';
import { priceLoader } from "./loaders";
import About from './pages/about'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App/>}
        >
                <Route
                    path=""
                    element={<Main/>}
                />
                <Route 
                    path='currencies'
                    element={<Currencies/>}
                />
                <Route 
                    path="price/:symbol" 
                    element={<Price/>} 
                    loader={priceLoader}
                />
                 <Route path="about" element={<About/>}
            />
        </Route>
    )
);

export default router;

