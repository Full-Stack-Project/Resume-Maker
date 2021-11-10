import { Formik, FormikProps, FormikValues } from "formik";
import React, { useRef } from "react";
import Declaration from "./Declaration.component";
import Education from "./Education.component";
import ExtraActivities from "./ExtraActivities.component";
import Info from "./Info.component";
import Internship from "./Internship.component";
import Project from "./Project.component";
import Skill from "./Skill.component";
import { HiOutlineDownload } from "react-icons/all";
import ReactToPdf from "react-to-pdf";

const ResumeTemplate: React.FC = () => {
  const componentRef = useRef(null);
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
    project_title: "Project Name",
    project_link: "https://abcdasdfsadf.xyz",
    project_duration: "From - Till date",
    project_about: {
      0: "Tech Stack used. Brief.",
    },
    skill_title: "Technical",
    skill_about: {
      0: "What skills do you have? Brief.",
    },
    extra_activities_about: {
      0: "What things you have learned? Brief.",
    },
    declaration:
      "I hereby declare that all the above mentioned information is true and correct to the best of my knowledge.",
  };

  return (
    <div className="bg-hero-image min-h-screen inline-block bg-fixed min-w-full bg-no-repeat bg-center bg-cover">
      <div className="bg-white bg-opacity-95 mx-16 my-5">
        <Formik
          initialValues={initialValues}
          onSubmit={() => console.log("submitted")}
        >
          {(formikProps: FormikProps<FormikValues>) => (
            <div className="bg-white py-3 mx-16 px-14">
              <form ref={componentRef} onSubmit={formikProps.handleSubmit}>
                <div>
                  <Info formikProps={formikProps} />
                </div>
                <div>
                  <Education formikProps={formikProps} />
                </div>
                <div>
                  <Internship formikProps={formikProps} />
                </div>
                <div>
                  <Project formikProps={formikProps} />
                </div>
                <div>
                  <Skill formikProps={formikProps} />
                </div>
                <div>
                  <ExtraActivities formikProps={formikProps} />
                </div>
                <div>
                  <Declaration formikProps={formikProps} />
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>

      <ReactToPdf
        scale={0.75}
        x={5}
        y={5}
        targetRef={componentRef}
        filename="resume.pdf"
      >
        {({ toPdf }: any) => (
          <button
            type="button"
            onClick={toPdf}
            className="bg-white hover:bg-blue-200 rounded-full border-2 border-primary p-2 fixed bottom-4 right-4"
          >
            <HiOutlineDownload className="h-10 w-10 text-primary" />
          </button>
        )}
      </ReactToPdf>
    </div>
  );
};

export default React.memo(ResumeTemplate);
