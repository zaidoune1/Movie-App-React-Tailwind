import { Route, Routes } from "react-router"
import {NavBar, Home, VediosDetails, ChannelDetails, Searching, Error} from "./components"

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/VediosDetails" element={<VediosDetails/>}/>
        <Route path="/channel/:idMovies" element={<ChannelDetails/>}/>
        <Route path="/Searching/:type" element={<Searching/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>

    </div>
  )
}

export default App
