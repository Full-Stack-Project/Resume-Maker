import React, { useState } from "react";
import { FormikProps, FormikValues } from "formik";
import { FaMinusSquare, FaPlusSquare } from "react-icons/all";

interface Props {
  formikProps: FormikProps<FormikValues>;
}

const ExtraActivities: React.FC<Props> = ({ formikProps }) => {
  const [pointsCounter, setPointsCounter] = useState(2);
  return (
    <div className="mt-9">
      <h3 className="uppercase flex text-primary font-bold">
        EXTRA/CO-CURRICULAR ACTIVITIES
      </h3>
      <hr className="w-full border border-primary" />
          <div className="pt-8 text-sm">
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
            </div>
            <div className="pt-2">
              {Array(pointsCounter)
                .fill(1)
                .map((item, index) => (
                  <div className="flex">
                    <span className="mr-4 ml-8">●</span>
                    <div className="flex">
                      <div
                        contentEditable="true"
                        key={item}
                        className="outline-none"
                      >
                        {formikProps.values.extra_activities_about[index]}
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
    </div>
  );
};

export default React.memo(ExtraActivities);
