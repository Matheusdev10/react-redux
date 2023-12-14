import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IUser } from '../../store/features/users/Slice';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export interface IUsers {
  table: Array<IUser>;
  onRemove(data: IUser): void;
  textFilter: string;
}

const TableUsers: React.FC<IUsers> = ({ table, onRemove, textFilter }) => {
  return (
    <TableContainer sx={{ marginTop: 4 }}>
      <Table size="small">
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
          {table
            .filter((item) =>
              item.nome.toLowerCase().includes(textFilter.toLowerCase())
            )
            .map(({ id, nome, cpf, dataNascimento, email, senha }) => (
              <TableRow key={id}>
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">{nome}</TableCell>
                <TableCell align="right">{cpf}</TableCell>
                <TableCell align="right">{dataNascimento}</TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">{senha}</TableCell>
                <Button
                  onClick={() =>
                    onRemove({ id, cpf, dataNascimento, email, nome, senha })
                  }
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUsers;
