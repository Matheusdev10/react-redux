import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

export interface ICompanies {
  nome: string;
  cnpj: string;
  endereço: string;
  telefone: string;
  email: string;
}

const schema = yup
  .object({
    nome: yup.string().required('nome é um campo obrigatório'),
    cnpj: yup.string().required('cnpj é um campo obrigatório'),
    endereço: yup.string().required('endereço é um campo obrigatório'),
    telefone: yup.string().required('telefone é um campo obrigatório'),
    email: yup
      .string()
      .email('Deve ser um email válido')
      .required('email é um campo obrigatório'),
  })
  .required();

export interface IFormCompanies {
  onSubmit(data: ICompanies): void;
}

const FormCompanies: React.FC<IFormCompanies> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICompanies>({ resolver: yupResolver(schema) });

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
            error={!!errors.cnpj?.message}
            type="text"
            placeholder="cnpj"
            {...register('cnpj')}
            id="outlined-basic"
            label="cnpj"
            variant="outlined"
            helperText={errors.cnpj?.message}
          />
        </Grid>

        <Grid xs={3}>
          <TextField
            fullWidth
            error={!!errors.endereço?.message}
            placeholder="endereço"
            type="text"
            {...register('endereço')}
            id="outlined-basic"
            label="endereço"
            variant="outlined"
            helperText={errors.endereço?.message}
          />
        </Grid>
        <Grid display={'flex'} xs={9.5} gap={3}>
          <Grid xs={6}>
            <TextField
              fullWidth
              error={!!errors.telefone?.message}
              type="tel"
              placeholder="telefone"
              {...register('telefone')}
              id="outlined-basic"
              label="telefone"
              variant="outlined"
              helperText={errors.telefone?.message}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth
              error={!!errors.email?.message}
              type="email"
              placeholder="email"
              {...register('email')}
              id="outlined-basic"
              label="email"
              variant="outlined"
              helperText={errors.email?.message}
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
export default FormCompanies;
