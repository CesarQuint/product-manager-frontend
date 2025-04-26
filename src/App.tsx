import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
// import Register from "./pages/Register";
// import ProductForm from "./pages/ProductForm";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route
        path="/auth"
        element={<Auth />}
      />
      {/* <Route
        path="/"
        element={<Dashboard />}
      />
     
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/product/new"
        element={<ProductForm />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetail />}
      />
      <Route
        path="/product/:id/edit"
        element={<ProductForm editMode />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      /> */}
    </Routes>
  );
}

export default App;
