/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuthors } from "../../redux/actions/authorActions"; // could use named import but confusing will be added when passed to props
// note that props has precedent to the module import
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import PropTypes, { func } from "prop-types";
import { newCourse } from "../../../tools/mockData";
import CourseForm from "./CourseForm";
function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course }); // or course: initialCourse
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Error while loading courses " + error);
      });
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Error while loading authors " + error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  }

  return (
    <>
      <CourseForm
        onChange={handleChange}
        course={course}
        errors={errors}
        authors={authors}
        onSave={handleSave}
      />
    </>
  );
}

ManageCoursePage.propTypes = {
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  // the other option can be fount in courses page
  loadCourses,
  saveCourse,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
