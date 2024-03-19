import { atom } from 'recoil';

export const browserState = atom<boolean>({
  key: 'browserState',
  default: true,
});
