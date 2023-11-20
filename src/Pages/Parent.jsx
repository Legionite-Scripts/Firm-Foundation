import React from "react";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Select from "react-select";

export default function Parent() {
  let indicatorVar = ">";

  //For react select package
  const classOptions = [
    { value: "classOne", label: "Class One" },
    { value: "classTwo", label: "Class Two" },
    { value: "classThree", label: "Class Three" },
    // Add more options as needed
  ];
  return (
    <Container id="parent">
      <Container fluid id="firstParentHeaderDiv">
        <h1 className="display-6">Parents</h1>
      </Container>
      <Container fluid id="parentsIndicator">
        <h1 className="display-6">
          <span>Home</span> <span id="colored">{indicatorVar}</span>{" "}
          <span id="colored">Parents</span>
        </h1>
      </Container>
      <Container fluid id="allSubjectsContainer">
        <Container id="innerAllSubjectsDiv">
          <h1 className="display-6">All Parents Data</h1>
        </Container>
        <Container id="subjectInputFieldsDiv">
          <input
            type="text"
            placeholder="Search by name.."
            id="subjectInputField"
          />
          <Select
            options={classOptions}
            isSearchable={false} // Remove this line if you want a searchable dropdown
            placeholder="Select Class"
            id="subjectInputField"
          />
          <button className="btn btn-danger" id="searchButton">
            Search
          </button>
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
      <Container fluid id="emptySpace"></Container>
      <Container id="copyrightContainer">
        <p>Copyright <span>Firm Foundation</span> 2021. All Rights Reserved.</p>
      </Container>
    </Container>
  );
}
