import { useState, useEffect, type FC } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/table";
import type { GenderColumns } from "../../../Interfaces/GenderColumns";
import GenderService from "../../../services/GenderService";
import Spinner from "../../../components/Spinner/Spinner";

interface GenderListProps {
  refreshKey: boolean;
}

const GenderList: FC<GenderListProps> = ({ refreshKey }) => {
  const [loadingGenders, setLoadingGenders] = useState(false);
  const [genders, setGenders] = useState<GenderColumns[]>([]);

  const handleLoadGenders = async () => {
    try {
      setLoadingGenders(true);

      const res = await GenderService.loadGenders();

      if (res.status === 200) {
        setGenders(res.data.genders);
      } else {
        console.error(
          "Unexpected status error occurred during loading genders: ",
          res.status
        );
      }
    } catch (error) {
      console.error(
        "Unexpected server error occurred during loading genders: ",
        error
      );
    } finally {
      setLoadingGenders(false);
    }
  };

  useEffect(() => {
    handleLoadGenders();
  }, [refreshKey]);

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="max-w-full max-h-[calc(100vh)] overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-200 bg-blue-600 sticky top-0 text-white text-xs">
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
                  className="px-5 py-3 font-medium text-start"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 text-gray-500 text-sm">
              {loadingGenders ? (
                <TableRow>
                  <TableCell colSpan={3} className="px-4 py-3 text-center">
                    <Spinner size="md" />
                  </TableCell>
                </TableRow>
              ) : (
                genders.map((gender, index) => (
                  <TableRow className="hover:bg-gray-100" key={index}>
                    <TableCell className="px-4 py-3 text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      {gender.gender}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center">
                      <div className="flex justify-center items-center gap-4">
                        <Link
                          to={`/gender/edit/${gender.gender_id}`}
                          className="text-green-600 font-medium hover:underline"
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/gender/delete/${gender.gender_id}`}
                          className="text-red-600 font-medium hover:underline"
                        >
                          Delete
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default GenderList;
