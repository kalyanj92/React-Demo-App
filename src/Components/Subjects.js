import React, { Component } from "react";
import SubjectsList from "./SubjectsList";

class Subjects extends Component {
  render() {
    console.log(this.props);
    let subjectList;
    if (this.props.subjects) {
      subjectList = this.props.subjects.map(subjects => {
        //  console.log(subjects);
        return <SubjectsList key={subjects.title} subjects={subjects} />;
      });
    }
    return <div className="Subjects">{subjectList}</div>;
  }
}

export default Subjects;
