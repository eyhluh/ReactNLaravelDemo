import { useEffect, useState } from "react";
import axios from "axios";

type Gender = {
  id: number;
  name: string;
};

const GenderList = () => {
  const [genders, setGenders] = useState<Gender[]>([]);

  useEffect(() => {
    axios.get<Gender[]>("http://localhost:8000/api/genders").then((res) => {
      setGenders(res.data);
    });
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gender List</h2>
      <ul className="list-disc pl-5">
        {genders.map((gender) => (
          <li key={gender.id}>{gender.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenderList;
