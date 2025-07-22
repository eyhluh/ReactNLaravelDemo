// const GenderList = () => {
//   const genders = [
//     {
//       gender_id: 1,
//       gender: "Male",
//     },
//     {
//       gender_id: 2,
//       gender: "Female",
//     },
//     {
//       gender_id: 3,
//       gender: "Prefer not to say",
//     },
//   ]
  
//   return (
//     <>
//     <div className="overflow-hidden rounded-lg border-gray-200 bg-white">
//       <div className="max-full max-h-[calc(100hv)] overflow-x-auto ">
//         <Table>
//           <TableHeader className="border-b border-gray-200 bg-blue-600 sticky top-0 text-xs">
//             <TableRow>
//               <TableCell isHeader className="px-5 py-3 font-medium text-center"> No.</TableCell>
//               <TableCell isHeader className="px-5 py-3 font-medium text-center"> Gender</TableCell>
//               {/* <TableCell isHeader className="px-5 py-3 font-medium text-center"> No.</TableCell> */}
//             </TableRow>
//           </TableHeader>
//           <TableBody className="divide-y divide-gray-100 text-gray-500 text-sm">
//             {genders.map((gender, index) => (
//               <TableRow className="hover:bg-gray-100">
//                 <TableCell className="px-4 py-3 text-center">
//                   {gender.gender_id}
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-start">
//                   {gender.gender}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//     </>
//   )
// }

// export default GenderList

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
    {
      no: 3,
      gender: "Prefer not to say-",
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
