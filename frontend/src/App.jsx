import React  from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Login from "./pages/Auth/Login"; 
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import PrivateRoute from "./routes/PrivateRoute";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsres from "./pages/Admin/ManageUsers";
import UserTasks from "./pages/User/UserTasks";
import UserDashboard from "./pages/User/UserDashboard";
import ViewUserTaskDetails from "./pages/User/ViewUserTaskDetails";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />

          {/* Admin routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsres />} />
          </Route>

        {/* User routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<UserTasks />} />
            <Route path="user/task-details/:id" element={<ViewUserTaskDetails />} />            
          </Route>  
                       
        </Routes>
      </Router>
    </div>
  );
}

export default App;