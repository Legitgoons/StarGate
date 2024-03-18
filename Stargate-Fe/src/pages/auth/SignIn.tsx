import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { browserState } from '@/recoil/browserState';
import SignInComponent from '@/organisms/auth/SignInComponent';
import ToolTipComponent from '@/atoms/auth/ToolTipComponent';
import { browserAlert } from '@/utils/browserAlert';

const SignIn = () => {
  const setBrowser = useSetRecoilState(browserState);
  const userAgent = window.navigator.userAgent;

  useEffect(() => {
    console.log(userAgent);
    if (userAgent.includes('Mac') || userAgent.includes('Firefox')) {
      setBrowser(false);
      browserAlert(userAgent);
    }
  }, []);

  return (
    <div className="w-screen">
      <div className="ml-auto mr-auto text-center">
        <h1 className="m-5 text-center text-white t2b">S T A R G A T E</h1>
        <SignInComponent />
        <div className="absolute w-fit right-10 bottom-10">
          <ToolTipComponent />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
