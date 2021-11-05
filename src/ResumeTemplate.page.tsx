import { Formik } from "formik";
import React from "react";

const ResumeTemplate: React.FC = () => {
  const initialValues = {
    name: "Vikas Sharma",
    city: "Lajpat Nagar",
    address: "Agra, 281121",
    email: "vikash.sharma@gla.ac.in",
    mob_number: "+91 9999999999",
    education_current: "Bachelor of Arts in English, GLA University, Mathura",
    education_current_completion: "May 2019",
    education_highschool: "May 2016",
    education_highschool_completion: "May 2014",
    internship_location: "Times of India, Agra",
    internship_position: "Reader/Associate Editor",
    internship_points: {
      0: "Review poetry submissions online with a team of 7 readers and recommend the highest quality creative works to be published in TOI.",
      1: "Foster collaboration with other managing editors on magazine's theme, mission, and design using Adobe InDesign and Microsoft Publisher to review monthly.",
    },
    project_title: "Resume Maker",
    project_link: "https://abcdasdfsadf.xyz",
    project_about: {
      0: "Implemented and evaluated schedules, programs and job positions for over 150 campers and 15 counselors.",
      1: "Planned and devised lessons and activities for 30 teenagers that enforced responsibility and dependability.",
      2: "Coordinated end-of-summer awards ceremony for over 100 teenagers and parents.",
    },
    skill_title: "Technical",
    skill_about: {
      0: "Presented to 100+ conference participants about the findings of a research study on folklore trends in the Southeast.",
      1: "Conducted 3 breakout sessions with conference participants to answer questions and provide feedback about the study.",
    },
    extra_activities_about: {
      0: "Coordinated SRIJAN (Cultural Fest, GLA)",
    },
    declaration:
      "I hereby declare that all the above mentioned information is true and correct to the best of my knowledge.",
  };
  return (
    <div className="bg-hero-image min-h-screen inline-block bg-fixed w-screen bg-no-repeat bg-center bg-cover">
      <div className="bg-white bg-opacity-95 mx-16 mt-5"></div>
      <Formik
        initialValues={initialValues}
        onSubmit={() => console.log("submitted")}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}></form>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(ResumeTemplate);
