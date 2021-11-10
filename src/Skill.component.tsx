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
        Skills
      </h3>
      <hr className="w-full border border-primary" />

      {Array(internshipPointsArray.length)
        .fill(1)
        .map((item1, index1) => (
          <div className="pt-8 text-sm">
            <div className="flex justify-between">
              <div className="flex">
                <div
                  contentEditable="true"
                  className="font-bold flex outline-none"
                >
                  <div
                    contentEditable="true"
                    className="flex italic outline-none"
                  >
                    <span className="my-auto">
                      <FaPlusSquare
                        className="text-primary cursor-pointer"
                        onClick={() =>
                          setInternshipPointsArray((prev) => {
                            let arr = [...prev];
                            arr[index1]++;
                            return arr;
                          })
                        }
                      />
                    </span>
                    <span className="my-auto mx-1">
                      <FaMinusSquare
                        className="text-primary cursor-pointer"
                        onClick={() =>
                          setInternshipPointsArray((prev) => {
                            if (prev[index1] > 0) {
                              let arr = [...prev];
                              arr[index1]--;
                              return arr;
                            }
                            return prev;
                          })
                        }
                      />
                    </span>
                  </div>
                  <span>{formikProps.values.skill_title}</span>
                </div>
              </div>
            </div>

            <div className="pt-2" key={item1}>
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
                        {formikProps.values.skill_about[0]}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default React.memo(Internship);
