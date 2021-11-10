import React from "react";
import InputBox from "./InputBox.component";

interface Props {
  formikProps: any;
}

const Info: React.FC<Props> = ({ formikProps }) => {
  return (
    <div>
      <div className="text-center -space-y-1">
        <InputBox
          className="outline-none text-primary-one font-bold text-2xl uppercase"
          name="name"
          onChange={formikProps.handleChange}
          value={formikProps.values.name}
        />
        <div>
          <InputBox
            className="text-xs font-medium capitalize"
            name="city"
            onChange={formikProps.handleChange}
            value={formikProps.values.city}
          />
          <span className="mx-1 my-auto">●</span>
          <InputBox
            className="text-xs font-medium capitalize"
            name="address"
            onChange={formikProps.handleChange}
            value={formikProps.values.address}
          />
        </div>
        <div>
          <InputBox
            className="text-xs font-medium underline text-secondary-one lowercase"
            name="email"
            onChange={formikProps.handleChange}
            value={formikProps.values.email}
          />

          <span className="mx-1 my-auto">●</span>

          <InputBox
            className="text-xs font-medium capitalize"
            name="mob_number"
            onChange={formikProps.handleChange}
            value={formikProps.values.mob_number}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default React.memo(Info);
