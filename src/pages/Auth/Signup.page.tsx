import { FC, memo } from 'react';

interface Props {}

const Signup: FC<Props> = (props) => {
    return (<div>SignUp Page</div>);
}

Signup.defaultProps = {};

export default memo(Signup);