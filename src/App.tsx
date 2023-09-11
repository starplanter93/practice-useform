import React from 'react';
import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form';

interface InputForm {
  id: string;
}

function App() {
  const { register, handleSubmit } = useForm<InputForm>({ mode: 'onBlur' });

  const onSubmit = (data: InputForm) => {
    console.log(data, '제출성공');
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('id')} />
      </form>
    </div>
  );
}

export default App;
