import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

export type Inputs = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  senha: string;
  email: string;
};

const schema = yup
  .object({
    nome: yup.string().required('Nome é um campo obrigatório'),
    cpf: yup
      .string()
      .required('cpf é um campo obrigatório')
      .min(11, 'cpf inválido')
      .max(11, 'cpf invalido'),
    dataNascimento: yup
      .string()
      .required('Data de Nascimento é um campo obrigatório'),
    email: yup
      .string()
      .email('Deve ser um email válido')
      .required('Email é um campo obrigatório'),
    senha: yup.string().required('Senha é um campo obrigatório'),
  })
  .required();

export interface IFormUsers {
  onSubmit(data: Inputs): void;
}

const FormUsers: React.FC<IFormUsers> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid sx={{ justifyContent: 'center' }} gap={3} container mt={5}>
        <Grid xs={3}>
          <TextField
            fullWidth
            error={!!errors.nome?.message}
            type="text"
            placeholder="nome"
            {...register('nome')}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            helperText={errors.nome?.message}
          />
        </Grid>
        <Grid xs={3}>
          <TextField
            fullWidth
            error={!!errors.cpf?.message}
            type="text"
            placeholder="cpf"
            {...register('cpf')}
            id="outlined-basic"
            label="cpf"
            variant="outlined"
            helperText={errors.cpf?.message}
          />
        </Grid>

        <Grid xs={3}>
          <TextField
            fullWidth
            error={!!errors.dataNascimento?.message}
            type="date"
            {...register('dataNascimento')}
            id="outlined-basic"
            variant="outlined"
            helperText={errors.dataNascimento?.message}
          />
        </Grid>
        <Grid display={'flex'} xs={9.5} gap={3}>
          <Grid xs={6}>
            <TextField
              fullWidth
              error={!!errors.email?.message}
              type="email"
              placeholder="Email"
              {...register('email')}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth
              error={!!errors.senha?.message}
              type="password"
              placeholder="Senha"
              {...register('senha')}
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              helperText={errors.senha?.message}
            />
          </Grid>
        </Grid>

        <Grid xs={4}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            endIcon={<SendIcon />}
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default FormUsers;
