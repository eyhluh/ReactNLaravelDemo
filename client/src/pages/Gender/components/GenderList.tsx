import { act } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";

function GenderList() {
  const genders = [
    {
      gender_id: 1,
      gender: "Male",
      action: (
        <>
          <div className="flex gap-4">
            <div>
              <Link
                to="/gender/edit"
                className="text-green-600 hover:underline font-medium"
              >
                Edit
              </Link>
            </div>
            <div>
              <Link
                to="/gender/delete"
                className="text-red-600 hover:underline font-medium"
              >
                Delete
              </Link>
            </div>
          </div>
        </>
      ),
    },
    {
      gender_id: 2,
      gender: "Female",
      action: (
        <>
          <div className="flex gap-4">
            <div>
              <Link
                to="/gender/edit"
                className="text-green-600 hover:underline font-medium"
              >
                Edit
              </Link>
            </div>
            <div>
              <Link
                to="/gender/delete"
                className="text-red-600 hover:underline font-medium"
              >
                Delete
              </Link>
            </div>
          </div>
        </>
      ),
    },
    {
      gender_id: 3,
      gender: "Prefer not to say",
      action: (
        <>
          <div className="flex gap-4">
            <div>
              <Link
                to="/gender/edit"
                className="text-green-600 hover:underline font-medium"
              >
                Edit
              </Link>
            </div>
            <div>
              <Link
                to="/gender/delete"
                className="text-red-600 hover:underline font-medium"
              >
                Delete
              </Link>
            </div>
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
            <TableHeader className="border-b border-gray-200 bg-blue-600 text-white sticky top-0 z-30 text-xs">
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
                  Gender
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-center"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 text-gray-500 text-sm">
              {genders.map((gender, index) => (
                <TableRow className="hover:bg-gray-100" key={index}>
                  <TableCell className="px-4 py-3 text-center">
                    {gender.gender_id}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {gender.gender}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {gender.action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default GenderList;
