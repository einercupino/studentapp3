import React, { useState } from "react";
import ReactDOM from "react-dom";
import StudentForm from "studentapp1/StudentForm";

const App = () => {
  const [studentData, setStudentData] = useState(null);

  const handleFormSubmit = (data) => {
    setStudentData(data);
  };

  return (
    <div>
      <StudentForm/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
