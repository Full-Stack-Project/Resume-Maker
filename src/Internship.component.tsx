import React, { useState } from "react";
import { FormikProps, FormikValues } from "formik";
import { FaMinusSquare, FaPlusSquare } from "react-icons/all";

interface Props {
  formikProps: FormikProps<FormikValues>;
}

const Education: React.FC<Props> = ({ formikProps }) => {
  const [pointsCounter, setPointsCounter] = useState(1);
  const [internshipCounter, setInternshipCounter] = useState(1);
  return (
    <div className="mt-9">
      <h3 className="uppercase flex text-primary font-bold">
        <span className="my-auto mr-2">
          <FaPlusSquare
            className="text-primary cursor-pointer"
            onClick={() => setInternshipCounter(internshipCounter + 1)}
          />
        </span>
        Internship experience
      </h3>
      <hr className="w-full border border-primary" />

      {Array(internshipCounter)
        .fill(1)
        .map((item1) => (
          <div className="pt-8 text-sm">
            <div className="flex justify-between">
              <div className="flex">
                <span className="my-auto mr-2">
                  <FaMinusSquare
                    className="text-primary cursor-pointer"
                    onClick={() => setInternshipCounter(internshipCounter - 1)}
                  />
                </span>
                <div contentEditable="true" className="font-bold outline-none">
                  {formikProps.values.internship_location}
                </div>
              </div>
              <div contentEditable="true" className="mr-16 outline-none">
                {formikProps.values.internship_duration}
              </div>
            </div>
            <div
              contentEditable="true"
              className="mr-16 flex italic outline-none"
            >
              <span className="my-auto mr-2">
                <FaPlusSquare
                  className="text-primary cursor-pointer"
                  onClick={() => setPointsCounter(pointsCounter + 1)}
                />
              </span>
              <span>{formikProps.values.internship_position}</span>
            </div>
            <div className="pt-2" key={item1}>
              {Array(pointsCounter)
                .fill(1)
                .map((item) => (
                  <div className="flex">
                    <span className="mr-4 ml-8">●</span>
                    <div className="flex">
                      <div
                        contentEditable="true"
                        key={item}
                        className="outline-none"
                      >
                        {formikProps.values.internship_points[0]}
                      </div>
                      <span className="my-0.5 ml-2">
                        <FaMinusSquare
                          className="text-primary cursor-pointer"
                          onClick={() => setPointsCounter(pointsCounter - 1)}
                        />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default React.memo(Education);
