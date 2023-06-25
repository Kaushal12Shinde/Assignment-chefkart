import React,{useState} from 'react'
import Header from './Components/Header';
import FoodList from './Components/FoodList';
import Ingridents from './Components/Ingridents';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [isViewListClicked, setIsViewListClicked] = useState(false);

  const handleViewList = () => {
    setIsViewListClicked(!isViewListClicked);
  };

  return (
    <>
      <Router>
      <Routes>
          <Route path='/' element={[<Header/>,<FoodList handleViewList={handleViewList}/>]}/>
          isViewListClicked&&<Route path="/ingridents" element={<Ingridents handleViewList={handleViewList}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
