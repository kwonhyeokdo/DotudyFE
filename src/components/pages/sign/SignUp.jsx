import React from "react";

import wallpaper from 'assets/img/pages/sign/wallpaper.webp';
import FullBox from "components/parts/FullBox";

/**
 * @description <br/>
 * - url: "/sign-up"
 * - 회원가입 페이지
 * @type <br/>
 * Self Closing Tags
 */
const SignUp = () => {
    return (
        <FullBox
            background={wallpaper}
        >
        </FullBox>
    );
};

export default SignUp;