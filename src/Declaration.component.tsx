import React from "react";
import { FormikProps, FormikValues } from "formik";

interface Props {
  formikProps: FormikProps<FormikValues>;
}

const Declaration: React.FC<Props> = ({ formikProps }) => {
  return (
    <div className="mt-9">
      <h3 className="uppercase flex text-primary font-bold">
        Declaration
      </h3>
      <hr className="w-full border border-primary" />

      {formikProps.values.declaration}
    </div>
  );
};

export default React.memo(Declaration);
