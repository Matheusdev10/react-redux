import React from 'react';
import { useForm } from 'react-hook-form';

export type Inputs = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  senha: string;
  email: string;
};

export type onSubmit = {
  onSubmit(data: Inputs): void;
};

export interface IFormItem {
  onSubmit(data: Inputs): void;
}

const FormItem: React.FC<onSubmit> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="nome" {...register('nome')} />
      <input placeholder="cpf" {...register('cpf')} />
      <input placeholder="dataNascimento" {...register('dataNascimento')} />
      <input placeholder="email" {...register('email')} />
      <input placeholder="senha" {...register('senha')} />

      <input type="submit" />
    </form>
  );
};
export default FormItem;
