import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Production.css';
import axios from "axios";

function Production() {
  const [submittedData, setSubmittedData] = useState(null);

  const submitForm = (values) => {
    axios
      .post("http://127.0.0.1:5000/data", values) // Replace with your server URL
      .then((response) => {
        setSubmittedData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <h2>Team Wise Production</h2>
        <Formik
          initialValues={{
            date: new Date(),
            unit: "",
            teamLeader: "",
            machine: "",
            production: "",
            rejection: ""
          }}
          onSubmit={submitForm}
          
        >
          {({ values, setFieldValue, handleChange }) => (
            <Form className="production-form">
              <label htmlFor="date" className="label">Date</label>
              <ReactDatePicker
                id="date"
                name="date"
                selected={values.date}
                onChange={(date) => setFieldValue("date", date)}
                dateFormat="dd-MM-yyyy"
                className="datepicker"
              />

              <label htmlFor="unit" className="label">Unit</label>
              <Field
                as="select"
                id="unit"
                name="unit"
                value={values.unit}
                onChange={handleChange}
                className="select"
              >
                <option value="">Select unit</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </Field>

              <label htmlFor="teamLeader" className="label">Team Leader</label>
              <Field
                as="select"
                id="teamLeader"
                name="teamLeader"
                value={values.teamLeader}
                onChange={handleChange}
                className="select"
              >
                <option value="">Select Team Leader</option>
                {values.unit === "A" && (
                  <>
                    <option value="Awais">Awais</option>
                    <option value="Areeb">Areeb</option>
                  </>
                )}
                {values.unit === "B" && (
                  <>
                    <option value="Basit">Basit</option>
                    <option value="Noman">Noman</option>
                  </>
                )}
                {values.unit === "C" && (
                  <>
                    <option value="Badar">Badar</option>
                    <option value="Hamza">Hamza</option>
                  </>
                )}
              </Field>

              <label htmlFor="machine" className="label">Machine No#</label>
              <Field
                as="select"
                id="machine"
                name="machine"
                value={values.machine}
                onChange={handleChange}
                className="select"
              >
                <option value="">Select Machine No</option>
                {values.teamLeader === "Awais" && (
                  <>
                    <option value="MHM 01 A">MHM 01 A</option>
                    <option value="MHM 02 A">MHM 02 A</option>
                    <option value="MHM 03 A">MHM 03 A</option>
                    <option value="MHM 04 A">MHM 04 A</option>
                  </>
                )}
                {values.teamLeader === "Areeb" && (
                  <>
                    <option value="MHM 01 B">MHM 01 B</option>
                    <option value="MHM 02 B">MHM 02 B</option>
                    <option value="MHM 03 B">MHM 03 B</option>
                    <option value="MHM 04 B">MHM 04 B</option>
                  </>
                )}
                {values.teamLeader === "Basit" && (
                  <>
                    <option value="MHM 01 C">MHM 01 C</option>
                    <option value="MHM 02 C">MHM 02 C</option>
                    <option value="MHM 03 C">MHM 03 C</option>
                    <option value="MHM 04 C">MHM 04 C</option>
                  </>
                )}
                {values.teamLeader === "Noman" && (
                  <>
                    <option value="MHM 01 D">MHM 01 D</option>
                    <option value="MHM 02 D">MHM 02 D</option>
                    <option value="MHM 03 D">MHM 03 D</option>
                    <option value="MHM 04 D">MHM 04 D</option>
                  </>
                )}
                {values.teamLeader === "Badar" && (
                  <>
                    <option value="MHM 01 E">MHM 01 E</option>
                    <option value="MHM 02 E">MHM 02 E</option>
                    <option value="MHM 03 E">MHM 03 E</option>
                    <option value="MHM 04 E">MHM 04 E</option>
                  </>
                )}
                {values.teamLeader === "Hamza" && (
                  <>
                    <option value="MHM 01 F">MHM 01 F</option>
                    <option value="MHM 02 F">MHM 02 F</option>
                    <option value="MHM 03 F">MHM 03 F</option>
                    <option value="MHM 04 F">MHM 04 F</option>
                  </>
                )}
              </Field>

              <label htmlFor="production" className="label">Production</label>
              <Field
                type="text"
                id="production"
                name="production"
                value={values.production}
                onChange={handleChange}
                className="input"
              />

              <label htmlFor="rejection" className="label">Rejection</label>
              <Field
                type="text"
                id="rejection"
                name="rejection"
                value={values.rejection}
                onChange={handleChange}
                className="input"
              />

              <button type="submit" className="submit-button">Submit</button>
            </Form>
          )}
        </Formik>
      </div>

      {submittedData && (
        <div className="col-lg-6">
          <h2>Submitted Data</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Production;
