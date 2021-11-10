import { FC, memo } from "react";
import LinkTo from "../components/LinkTo";

interface Props {
  className?: string;
}

const Copyrights: FC<Props> = ({ className }) => {
  return (
    <p className={`${className}`}>
      &copy; 2021 All Rights Reserved. <LinkTo to="/">GLA Resume Maker</LinkTo>{" "}
      is a FrontEnd Project.{" "}
      <LinkTo to="/cookiePreferences">Cookie Preferences</LinkTo>,{" "}
      <LinkTo to="/privacy">Privacy</LinkTo>, and{" "}
      <LinkTo to="/terms">Terms</LinkTo>.
    </p>
  );
};

Copyrights.defaultProps = {};

export default memo(Copyrights);
