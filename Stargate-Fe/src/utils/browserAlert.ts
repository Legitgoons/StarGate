import Swal from 'sweetalert2';

export const browserAlert = (userAgent: string) => {
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
};
