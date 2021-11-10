import React, { useState } from "react";
import { FormikProps, FormikValues } from "formik";
import { FaMinusSquare, FaPlusSquare } from "react-icons/all";

interface Props {
  formikProps: FormikProps<FormikValues>;
}

const Internship: React.FC<Props> = ({ formikProps }) => {
  const [internshipPointsArray, setInternshipPointsArray] = useState<number[]>([
    1,
  ]);
  return (
    <div className="mt-9">
      <h3 className="uppercase flex text-primary font-bold">
        <span className="my-auto mr-2">
          <FaPlusSquare
            className="text-primary cursor-pointer"
            onClick={() => setInternshipPointsArray((prev) => prev.concat(1))}
          />
        </span>
        <span className="my-auto mr-2">
          <FaMinusSquare
            className="text-primary cursor-pointer"
            onClick={() =>
              setInternshipPointsArray((prev) => {
                const arr = [...prev];
                arr.pop();
                return arr;
              })
            }
          />
        </span>
        EXTRA/CO-CURRICULAR ACTIVITIES
      </h3>
      <hr className="w-full border border-primary" />

      <div className="pt-8">
        {Array(internshipPointsArray.length)
          .fill(1)
          .map((item1, index1) => (
            <div className="text-sm pt-0.5" key={item1}>
              {Array(internshipPointsArray[index1])
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
                        {formikProps.values.project_about[0]}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Internship);
