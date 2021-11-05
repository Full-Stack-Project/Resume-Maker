import { Formik, FormikProps, FormikValues } from "formik";
import React from "react";
import Education from "./Education.component";
import Info from "./Info.component";
import Internship from "./Internship.component";

const ResumeTemplate: React.FC = () => {
  const initialValues = {
    name: "Vikas Sharma",
    city: "Lajpat Nagar",
    address: "Agra, 281121",
    email: "vikash.sharma@gla.ac.in",
    mob_number: "+91 9999999999",
    education_current: "Bachelor of Arts in English, GLA University, Mathura",
    education_current_completion: "May 2019",
    education_highschool: "High School, RPS School, Agra",
    education_highschool_completion: "May 2014",
    education_intermediate: "Intermediate, RPS School, Agra",
    education_intermediate_completion: "May 2016",
    internship_location: "Location",
    internship_duration: "From - Till date",
    internship_position: "Position During Internsip",
    internship_points: {
      0: "What things you have learned? Brief.",
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
        {(formikProps: FormikProps<FormikValues>) => (
          <div className="bg-white py-3 mx-16 px-14">
            <form onSubmit={formikProps.handleSubmit}>
              <div>
                <Info formikProps={formikProps} />
              </div>
              <div>
                <Education formikProps={formikProps} />
              </div>
              <div>
                <Internship formikProps={formikProps} />
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(ResumeTemplate);
