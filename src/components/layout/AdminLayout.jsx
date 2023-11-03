import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-green-300 flex-[1]">
        <h2>side bar</h2>
      </div>
      <div className="bg-red-300 flex-[3]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
