import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Select from "react-select";
import { Table } from "react-bootstrap";

export default function Subject() {
  let indicatorVar = ">";

  const classOptions = [
    { value: "classOne", label: "Class One" },
    { value: "classTwo", label: "Class Two" },
    { value: "classThree", label: "Class Three" },
    // Add more options as needed
  ];

  return (
    <Container fluid id="subject">
      <Container fluid id="firstSubjectHeaderDiv">
        <h1 className="display-6">Subjects</h1>
      </Container>
      <Container fluid id="subjectsIndicator">
        <h1 className="display-6">
          <span>Home</span> <span id="colored">{indicatorVar}</span>{" "}
          <span id="colored">Subjects</span>
        </h1>
      </Container>

      <Container fluid id="allSubjectsContainer">
        <Container id="innerAllSubjectsDiv">
          <h1 className="display-6">All Subjects</h1>
        </Container>
        <Container id="subjectInputFieldsDiv">
          <input
            type="text"
            placeholder="Search subjects by name.."
            id="subjectInputField"
          />
          <Select
            options={classOptions}
            isSearchable={false} // Remove this line if you want a searchable dropdown
            placeholder="Select Class"
            id="subjectInputField"
          />
          <button className="btn btn-danger">Search</button>
        </Container>

        <Table id="subjectsTable" className="table-bordered">
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Cell 2</td>
              <td>Row 1, Cell 3</td>
              <td>Row 1, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
              <td>Row 2, Cell 3</td>
              <td>Row 1, Cell 3</td>
            </tr>
          </tbody>
        </Table>
        <Container id="previousAndNextDiv">
          <Container id="innerPreviousAndNextDiv">
            <h6>Previous</h6>
            <Container id="numberedSubjectDivs" className="active">
              <h6>1</h6>
            </Container>
            <Container id="numberedSubjectDivs">
              <h6>2</h6>
            </Container>
            <Container id="numberedSubjectDivs">
              <h6>3</h6>
            </Container>
            <h6>Next</h6>
          </Container>
        </Container>
      </Container>

      <Container id="addNewSubject">
        <Container id="addNewSubjectHeaderDiv">
          <h1 className="display-6">Add New Subject</h1>
        </Container>
        <Container id="addSubjectInputFieldDiv">
          <Container id="innerAddSubjectDivs">
            <p>Subject Name</p>
            <input type="text" />
          </Container>
          <Container id="innerAddSubjectDivs">
            <p>Teachers</p>
            <input type="text" />
          </Container>
          <Container id="innerAddSubjectDivs">
            <p>Classes</p>
            <input type="text" />
          </Container>
          <Container id="innerAddSubjectDivs">
            <p>Days</p>
            <input type="text" />
          </Container>
        </Container>
        <Container id="addSubjectButtons">
          <button className="btn btn-danger">Save</button>
          <button className="btn">Reset</button>
        </Container>
      </Container>
    </Container>
  );
}
