import {FC, memo} from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from './Login.page';
import SignupPage from './Signup.page';

interface Props {}

const Auth: FC<Props> = (props) => {
    return (
        <Routes>
            <Route path="/login">
                <LoginPage></LoginPage>
            </Route>
            <Route path="/signup">
                <SignupPage></SignupPage>
            </Route>
        </Routes>
    );
};

Auth.defaultProps = {};

export default memo(Auth);