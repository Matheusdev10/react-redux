import React from 'react';
import { useForm } from 'react-hook-form';

export type Inputs = {
  nome: string;
  dataNascimento: string;
  cpf: string;
  senha: string;
  email: string;
};

export interface IFormItem {
  onSubmit(data: Inputs): void;
}

const FormItem: React.FC<IFormItem> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="nome" {...register('nome')} />
      <input placeholder="dataNascimento" {...register('dataNascimento')} />
      <input placeholder="cpf" {...register('cpf')} />
      <input placeholder="senha" {...register('senha')} />
      <input placeholder="email" {...register('email')} />

      <input type="submit" />
    </form>
  );
};

export default FormItem;
