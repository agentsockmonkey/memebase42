import {atom, useRecoilState} from 'recoil'

export const wordState = atom({
    key: 'wordState' ,
    default: '',
});
