import { count } from 'console';
import create from 'zustand';
import { FormData } from './useFormData';

type UseCountdownList = {
  currentIndex: number;
  setIndex: (index: number) => void;
  countdownList: Array<FormData>;
  addCountdown: (countdown: FormData) => void;
  setCountdownList: (countdownList: Array<FormData>) => void;
  removeCountdown: (id: number) => void;
};


// the more the number of countdowns grow, this solution also get's more inefficient
const removeiIfExist = (list: Array<FormData>, id: number) => {
  return list.filter((countdown) => countdown.id !== id);
}

const KEY = 'countdownList';

export const getLocalStorage = (key: string, defaultValue: string) => JSON.parse(window.localStorage.getItem(key) || defaultValue);
const setLocalStorage = (key: string, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useCountdown = create<UseCountdownList>(set => ({
  currentIndex: 0,
  setIndex: (index: number) => set(({ currentIndex: index })),
  countdownList: [],
  setCountdownList: (countdownList: Array<FormData>) => set(({ countdownList })),
  addCountdown: (countDown) => set((state) => {
    const newArr = removeiIfExist(state.countdownList, countDown.id);
    const added = newArr.concat({ ...countDown, id: state.currentIndex });
    setLocalStorage(KEY, added);
    setLocalStorage('countdownIndex', state.currentIndex);
    return { countdownList: added, currentIndex: +state.currentIndex + 1 };
  
  }),
  removeCountdown: (id) => set((state) => {
    const newArr = state.countdownList.filter((cd) => cd.id !== id);
    setLocalStorage(KEY, newArr);
    setLocalStorage('countdownIndex', state.currentIndex);
    return { countdownList:  newArr, currentIndex: +state.currentIndex + 1};
  }),
}));
