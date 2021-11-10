import React from "react";
import { FormikProps, FormikValues } from "formik";

interface Props {
  formikProps: FormikProps<FormikValues>;
}

const Declaration: React.FC<Props> = ({ formikProps }) => {
  return (
    <div className="mt-9">
      <h3 className="uppercase flex text-primary-one font-bold">Declaration</h3>
      <hr className="w-full border border-primary-one" />
      <h2 className="text-sm pt-8">{formikProps.values.declaration}</h2>
    </div>
  );
};

export default React.memo(Declaration);
