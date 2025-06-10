import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.jsx'
import SignupPage from './components/signup/SignupPage.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  return token ? <App /> : <Navigate to="/signup" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />
  },
  {
    path: '/signup',
    element: <SignupPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
