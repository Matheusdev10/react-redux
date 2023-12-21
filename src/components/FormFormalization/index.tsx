import { yupResolver } from '@hookform/resolvers/yup';
import SendIcon from '@mui/icons-material/Send';
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

import * as S from './styles';

import * as yup from 'yup';

export interface IFormalizations {
  nome: string;
  cpfCnpj: string;
  produto: string;
  tipoCadastro: string;
  data: string;
  status: string;
}

const schema = yup
  .object({
    nome: yup.string().required('nome é um campo obrigatório'),
    cpfCnpj: yup.string().required('cpf/cnpj é um campo obrigatório'),
    produto: yup.string().required('produto é um campo obrigatório'),
    tipoCadastro: yup
      .string()

      .required('tipo cadastro é um campo obrigatório'),
    data: yup.string().required('data é um campo obrigatório'),
    status: yup.string().required('status é um campo obrigatório'),
  })
  .required();

export interface IFormFormalization {
  onSubmit(data: IFormalizations): void;
}

export const FormFormalization: React.FC<IFormFormalization> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormalizations>({ resolver: yupResolver(schema) });

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
            error={!!errors.cpfCnpj?.message}
            type="text"
            placeholder="cpf/cnpj"
            {...register('cpfCnpj')}
            id="outlined-basic"
            label="cpf/cnpj"
            variant="outlined"
            helperText={errors.cpfCnpj?.message}
          />
        </Grid>

        <Grid xs={3}>
          <TextField
            fullWidth
            error={!!errors.produto?.message}
            type="text"
            placeholder="produto"
            {...register('produto')}
            id="outlined-basic"
            variant="outlined"
            label="produto"
            helperText={errors.produto?.message}
          />
        </Grid>
        <Grid display={'flex'} xs={9.5} gap={3}>
          <Grid xs={6}>
            <S.Box>
              <select {...register('tipoCadastro')}>
                <option value=""></option>
                <option value="pj">PJ</option>
                <option value="pf">PF</option>
              </select>
            </S.Box>
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth
              error={!!errors.data?.message}
              type="date"
              {...register('data')}
              id="outlined-basic"
              variant="outlined"
              helperText={errors.data?.message}
            />
          </Grid>

          <Grid xs={6}>
            <S.Box>
              <select {...register('status')}>
                <option value=""></option>
                <option value="analise manual">analise manual</option>
                <option value="aprovado">aprovado</option>
                <option value="reprovado">reprovado</option>
              </select>
            </S.Box>
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
