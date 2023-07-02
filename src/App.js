import {
  BrowserRouter as Router,
   Routes,
   Route
  } from 'react-router-dom'

import {publicRoutes} from "./routes";
import Default from "./pages/Default"

function App() {

  return (
        <Router>
    <div className="App">
          <Routes>
            {publicRoutes.map((route,index)=>{
              const DefaultLayout = route.layout || Default
              const Page = route.element
              return <Route path={route.path} key={index} element={<DefaultLayout><Page/></DefaultLayout> }/>
            })}
          </Routes>
    </div>
        </Router>
  );
}

export default App;
