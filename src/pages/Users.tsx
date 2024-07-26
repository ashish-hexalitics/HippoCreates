// import React from "react";
import { useState,useEffect } from "react";
import Table from "../components/Common/Table";
import Loader from "../components/Common/Loader";
function Users() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
      {!loading ? <Table /> : <Loader />}
    </div>
  );
}

export default Users;
