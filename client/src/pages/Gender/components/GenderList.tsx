import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";

const GenderList = () => {
  const genders = [
    {
      no: 1,
      gender: "Male",
    },
    {
      no: 2,
      gender: "Female",
    },
  ];

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="max-w-full max-h-[calc(100vh-15)] overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 bg-blue-600 text-white sticky top-0 z-30 text-xs">
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {genders.map((gender) => (
                <TableRow>
                  <TableCell className="px-4 py-3 text-center">
                    {gender.no}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    {gender.gender}
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

export default GenderList;
