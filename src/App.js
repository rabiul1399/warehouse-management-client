import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Page/Form/Login/Login';
import Register from './Page/Form/Register/Register';
import RequireAuth from './Page/Form/RequireAuth/RequireAuth';
import Header from './Page/HomePage/Header/Header';
import Home from './Page/HomePage/Home/Home';
import Inventory from './Page/HomePage/Inventory/Inventory';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ManageItems from './Page/MyItem/ManageItems';
import AddItem from './Page/MyItem/AddItem/AddItem';
import MyItems from './Page/MyItem/MyItems/MyItems';
import NotFound from './Page/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      

     
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>

      <Route path="inventory/:id" element={
        <RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>
      }></Route>
      <Route path='/manageItems' element={
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>
      }></Route>
      <Route path='/addItem' element={
        <RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>
      }></Route>
      <Route path='/MyItems' element={
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>
      }></Route>

     
      <Route path='/*' element={<NotFound></NotFound>}></Route>
    </Routes>

 
<ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
