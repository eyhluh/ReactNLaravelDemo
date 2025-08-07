import { useCallback, useEffect, useRef, useState, type FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/table";
import UserService from "../../../services/UserService";
import Spinner from "../../../components/Spinner/Spinner";
import type { UserColumns } from "../../../Interfaces/UserInterfaces";
import FloatingLabelInput from "../../../components/input/FloatingLabelInput";

interface UserListProps {
  onAddUser: () => void;
  onEditUser: (user: UserColumns | null) => void;
  onDeleteUser: (user: UserColumns | null) => void;
  refreshKey: boolean;
}
const UserList: FC<UserListProps> = ({
  onAddUser,
  onEditUser,
  onDeleteUser,
  refreshKey,
}) => {
  const [loadingUsers, setloadingUsers] = useState(false);
  const [users, setUsers] = useState<UserColumns[]>([]);
  const [usersTableCurrentPage, setUsersTableCurrentPage] = useState(1);
  const [usersTableLastPages, setUsersTableLastPages] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const tableRef = useRef<HTMLDivElement>(null);

  const handleLoadUsers = async (page: number, append = false) => {
    try {
      setloadingUsers(true);

      const res = await UserService.loadUsers(page, search);

      if (res.status === 200) {
        const usersData = res.data.users.data || res.data.users || [];
        const lastPage =
          res.data.users.last_page ||
          res.data.last_page ||
          usersTableLastPages ||
          1;

        setUsers(append ? [...users, ...usersData] : usersData);
        setUsersTableCurrentPage(page);
        setUsersTableLastPages(lastPage);
        setHasMore(page < lastPage);
      } else {
        setUsers(append ? users : []);
        setHasMore(false);
      }
    } catch (error) {
      console.error(
        "Unexpected server error occured during loading users:  ",
        error
      );
    } finally {
      setloadingUsers(false);
    }
  };

  const handleScroll = useCallback(() => {
    const ref = tableRef.current;

    if (
      ref &&
      ref.scrollTop + ref.clientHeight >= ref.scrollHeight - 10 &&
      hasMore &&
      !loadingUsers
    ) {
      handleLoadUsers(usersTableCurrentPage + 1, true);
    }
  }, [hasMore, loadingUsers, usersTableCurrentPage]);

  const handleUserFullNameFormat = (user: UserColumns) => {
    let fullName = "";

    if (user.middle_name) {
      fullName = `${user.last_name}, ${
        user.first_name
      } ${user.middle_name.charAt(0)}.`;
    } else {
      fullName = `${user.last_name}, ${user.first_name}`;
    }

    if (user.suffix_name) {
      fullName += ` ${user.suffix_name}`;
    }

    return fullName;
  };

  useEffect(() => {
    const ref = tableRef.current;

    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    handleLoadUsers(usersTableCurrentPage, false);
  }, [refreshKey, search]);

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div
          ref={tableRef}
          className="relative max-w-full max-h-[calc(100vh-8.5rem)] overflow-x-auto"
        >
          <Table>
            <caption className="mb-4">
              <div className="border-b border-gray-100">
                <div className="p-4 flex justify-between">
                  <div className="w-64">
                    <FloatingLabelInput
                      label="Search"
                      type="text"
                      name="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      autoFocus
                    />
                  </div>
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
            <TableHeader className="border-b border-gray-200 bg-blue-600 text-white sticky top-0 z-30 text-">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  No.
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Full Name
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
                  Birth Date
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-start"
                >
                  Age
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
              {users.length ?? 0 > 0 ? (
                users.map((user, index) => (
                  <TableRow className="hover:bg-gray-100" key={index}>
                    <TableCell className="px-4 py-3  text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-3  text-start">
                      {handleUserFullNameFormat(user)}
                    </TableCell>
                    <TableCell className="px-4 py-3  text-start">
                      {user.gender.gender}
                    </TableCell>
                    <TableCell className="px-4 py-3  text-start">
                      {user.birth_date}
                    </TableCell>
                    <TableCell className="px-4 py-3  text-start">
                      {user.age}
                    </TableCell>
                    <TableCell className="px-4 py-3  text-center">
                      <div className="flex gap-4">
                        <button
                          type="button"
                          className="text-green-600 font-medium cursor-pointer hover:underline"
                          onClick={() => onEditUser(user)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="text-red-600 font-medium cursor-pointer hover:underline"
                          onClick={() => onDeleteUser(user)}
                        >
                          Delete
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="px-4 py-3 text-center">
                    <Spinner size="md" />
                  </TableCell>
                </TableRow>
              )}
              {loadingUsers && (users.length ?? 0) < 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="px-4 py-3 text-center">
                    <Spinner size="md" />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UserList;
