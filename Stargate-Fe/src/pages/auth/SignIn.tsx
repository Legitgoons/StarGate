import React, { useEffect } from 'react';
import SignInComponent from '@/organisms/auth/SignInComponent';
import ToolTipComponent from '@/atoms/auth/ToolTipComponent';
import Swal from 'sweetalert2';

const SignIn = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Mac')) {
      Swal.fire({
        icon: 'warning',
        title: '운영체제 권장 안내',
        text: '최적의 실행환경을 위해 Windows 운영체제를 권장합니다.',
      });
    } else if (userAgent.includes('Firefox')) {
      Swal.fire({
        icon: 'warning',
        title: '브라우저 권장 안내',
        text: '최적의 사용을 위해 Chrome 혹은 Edge 브라우저를 권장합니다.',
      });
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
