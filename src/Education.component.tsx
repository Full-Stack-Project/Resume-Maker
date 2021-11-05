import React from "react";
import { FormikProps, FormikValues } from "formik";
import InputBox from "./InputBox.component";

interface Props {
  formikProps: FormikProps<FormikValues>;
}

const Education: React.FC<Props> = ({ formikProps }) => {
  return (
    <div className="mt-7">
      <h3 className="uppercase text-primary font-bold">Education</h3>
      <hr className="w-full border border-primary" />
      <div className="pt-8 space-y-2">
        <div className="flex text-sm justify-between">
          <InputBox
            className="font-bold"
            onChange={formikProps.handleChange}
            value={formikProps.values.education_current}
            name="education_current"
          />
          <InputBox
            onChange={formikProps.handleChange}
            value={formikProps.values.education_current_completion}
            name="education_current_completion"
          />
        </div>
        <div className="flex text-sm justify-between">
          <InputBox
            className="font-bold"
            onChange={formikProps.handleChange}
            value={formikProps.values.education_intermediate}
            name="education_intermediate"
          />
          <InputBox
            onChange={formikProps.handleChange}
            value={formikProps.values.education_intermediate_completion}
            name="education_intermediate_completion"
          />
        </div>
        <div className="flex text-sm justify-between">
          <InputBox
            className="font-bold"
            onChange={formikProps.handleChange}
            value={formikProps.values.education_highschool}
            name="education_highschool"
          />
          <InputBox
            onChange={formikProps.handleChange}
            value={formikProps.values.education_highschool_completion}
            name="education_highschool_completion"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Education);
