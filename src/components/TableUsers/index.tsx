import React from 'react';
import { Users } from '../../pages/Users';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export interface IUser {
  table: Array<Users>;
}

const TableUsers: React.FC<IUser> = ({ table }) => {
  return (
    <TableContainer sx={{ marginTop: 4 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Cpf</TableCell>
            <TableCell align="right">Data de Nascimento</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Senha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map(({ id, nome, cpf, dataNascimento, email, senha }) => (
            <TableRow key={id}>
              <TableCell align="right">{id}</TableCell>
              <TableCell align="right">{nome}</TableCell>
              <TableCell align="right">{cpf}</TableCell>
              <TableCell align="right">{dataNascimento}</TableCell>
              <TableCell align="right">{email}</TableCell>
              <TableCell align="right">{senha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUsers;
