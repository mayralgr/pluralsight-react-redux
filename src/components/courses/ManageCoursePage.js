import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as authorActions from "../../redux/actions/authorActions"; // could use named import but confusing will be added when passed to props
// note that props has precedent to the module import
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Error while loading courses " + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Error while loading authors " + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

ManageCoursePage.propTypes = {
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  // the other option can be fount in courses page
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
