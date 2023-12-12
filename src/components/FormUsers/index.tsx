import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
export type Inputs = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  senha: string;
  email: string;
};

export interface IFormUsers {
  onSubmit(data: Inputs): void;
}

const FormUsers: React.FC<IFormUsers> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid sx={{ justifyContent: 'center' }} gap={1} container mt={5}>
        <Grid xs={3}>
          <TextField
            fullWidth
            type="text"
            placeholder="nome"
            {...register('nome')}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
          />
        </Grid>
        <Grid xs={3}>
          <TextField
            fullWidth
            type="text"
            placeholder="cpf"
            {...register('cpf')}
            id="outlined-basic"
            label="cpf"
            variant="outlined"
          />
        </Grid>

        <Grid xs={3}>
          <TextField
            fullWidth
            type="date"
            {...register('dataNascimento')}
            id="outlined-basic"
            variant="outlined"
          />
        </Grid>
        <Grid display={'flex'} xs={9.2} gap={1}>
          <Grid xs={6}>
            <TextField
              fullWidth
              type="email"
              placeholder="Email"
              {...register('email')}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              fullWidth
              type="password"
              placeholder="Senha"
              {...register('senha')}
              id="outlined-basic"
              label="Senha"
              variant="outlined"
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
