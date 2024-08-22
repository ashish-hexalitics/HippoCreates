// import React from "react";
import { useEffect } from "react";
import Table from "../../components/Common/Table";
import { useGetUsersQuery } from "../../store/slices/userSlice/apiSlice";
import { getUsers } from "../../store/slices/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
const columns = [
  {
    name: "name",
    Header: "Name",
    colName: "Default",
  },
  {
    name: "email",
    Header: "Email",
    colName: "Default",
  },
  {
    name: "roleName",
    Header: "Role Name",
    colName: "Default",
  },
  {
    name: "isEmailVerified",
    Header: "verified Email",
    colName: "Status",
  },
];

function Users() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.userSlice);
  const { data, isLoading, isError } = useGetUsersQuery();

  useEffect(() => {
    if (data && data.users) {
    const users =  data.users.map((user: { role: { name: any; }; })=>{
       return {...user,roleName:user.role.name}
      })
      dispatch(getUsers(users));
    }
  }, [data, dispatch]);

  if (isError) return <div>Error loading user data</div>;

  return (
    <div className="p-4">
      <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
        <Table
          data={users}
          columns={columns}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

export default Users;
