import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FloatingLabelInput from "./components/input/FloatingLabelInput";
import Button from "./components/button/Button";
import FloatingLabelSelect from "./components/select/FloatingLabelSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "./components/table";
import AppLayout from "./layout/AppLayout";

const Contents = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffixName, setSuffixName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleClearAll = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setSuffixName("");
    setBirthDate("");
    setGender("");
    setPassword("");
  };

  const selectItems = [
    { value: "", text: "Select Gender" },
    {
      value: "1",
      text: "Male",
    },
    {
      value: "2",
      text: "Female",
    },
    {
      value: "3",
      text: "Gay",
    },
    {
      value: "4",
      text: "Lesbian",
    },
    { value: "5", text: "Prefer Not to Say" },
  ];

  const tableItems = [
    {
      no: 1,
      name: "Bolvider",
      section: "BSCS 3A",
    },
    {
      no: 2,
      name: "John Doe",
      section: "BSIT 3A",
    },
    {
      no: 3,
      name: "Maria Labo",
      section: "BSIT 3B",
    },
  ];

  return (
    <>
      <div className="mt-4 mb-4">
        <FloatingLabelInput
          label="First Name"
          type="text"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoFocus
          required
        />
        <span className="text-black">First Name: {firstName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Middle Name"
          type="text"
          name="middle_name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <span className="text-black">Middle Name: {middleName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Last Name"
          type="text"
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <span className="text-black">Last Name: {lastName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Suffix Name"
          type="text"
          name="suffix_name"
          value={suffixName}
          onChange={(e) => setSuffixName(e.target.value)}
        />
        <span className="text-black">Suffix Name: {suffixName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Birth Date"
          type="date"
          name="birth_date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <span className="text-black">Birth Date: {birthDate}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelSelect
          label="Gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          {selectItems.map(({ value, text }) => (
            <option value={value}>{text}</option>
          ))}
        </FloatingLabelSelect>
        <span className="text-black">Gender: {gender}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-black">Password: {password}</span>
      </div>

      <div className="flex gap-4 m-4 mb-4">
        <Button
          type="button"
          label="Clear"
          newClassName="bg-white text-black p-2 border border-gray-300 hover:bg-gray-100 cursor-pointer rounded-lg"
          onClick={handleClearAll}
        />
        <Button type="submit" label="Save Person" className="w-full" />
      </div>

      <div>
        <h1 className="mb-2">This is table at the bottom</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>No.</TableCell>
              <TableCell isHeader>Name</TableCell>
              <TableCell isHeader>Section</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableItems.map(({ no, name, section }) => (
              <TableRow>
                <TableCell>{no}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{section}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Contents />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
