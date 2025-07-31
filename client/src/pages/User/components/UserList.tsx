import { type FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/table";

interface UserListProps {
  onAddUser: () => void;
}
const UserList: FC<UserListProps> = ({ onAddUser }) => {
  const users = [
    {
      user_id: 1,
      first_name: "Ella",
      middle_name: "",
      last_name: "Villeza",
      suffix_name: "",
      gender: "Female",
      address: "Roxas City",
      action: (
        <>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-green-600 font-medium cursor-pointer hover:underline"
            >
              Edit
            </button>
            <button
              type="button"
              className="text-red-600 font-medium cursor-pointer hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      ),
    },
    {
      user_id: 2,
      first_name: "Fred",
      middle_name: "",
      last_name: "Weasley",
      suffix_name: "",
      gender: "Male",
      address: "Roxas City",
      action: (
        <>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-green-600 font-medium cursor-pointer hover:underline"
            >
              Edit
            </button>
            <button
              type="button"
              className="text-red-600 font-medium cursor-pointer hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      ),
    },
    {
      user_id: 3,
      first_name: "George",
      middle_name: "",
      last_name: "Weasley",
      suffix_name: "",
      gender: "Prefer not to say",
      address: "Roxas City",
      action: (
        <>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-green-600 font-medium cursor-pointer hover:underline"
            >
              Edit
            </button>
            <button
              type="button"
              className="text-red-600 font-medium cursor-pointer hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="max-w-full max-h-[calc(100vh-15)] overflow-x-auto">
          <Table>
            <caption className="mb-4">
              <div className="border-b border-gray-100">
                <div className="p-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-colors cursor-pointer"
                    onClick={onAddUser}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </caption>
            <TableHeader className="border-b border-gray-200 bg-blue-600 text-white sticky top-0 z-30 text-xs">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  No.
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  First Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Middle Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Last Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Suffix Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Gender
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Address
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 text-gray-500 text-sm">
              {users.map((user, index) => (
                <TableRow className="hover:bg-gray-100" key={index}>
                  <TableCell className="px-4 py-3 text-start">
                    {user.user_id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.first_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.middle_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.last_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.suffix_name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.gender}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.address}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {user.action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UserList;
