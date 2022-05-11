import create from 'zustand';

export type FormData = {
  id: number;
  icon?: string;
  title: string;
  description?: string;
  dateModel?: string;
  date: string;
};

type UseFormData = {
  formData: FormData;
  setFormData: (data: FormData) => void;
  resetFormData: () => void;
}

export const useFormData = create<UseFormData>(set => ({
  formData: { id: 0, icon: '', title: '', description: '', date: '', dateModel: 'date' },  
  setFormData: (data: FormData) => set(() => ({ formData: data })),
  resetFormData: () => set(() => ({ formData: { id: 0, icon: '', title: '', description: '', date: '', dateModel: 'date' } }))
}));

export const useIsFormValid = () => {
  const formData = useFormData(state => state.formData);
  return !!formData.title && !!formData.date;
};