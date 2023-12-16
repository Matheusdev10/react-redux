import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ICompanie } from '../../store/features/companies/Slice';

export interface ITableCompanies {
  table: Array<ICompanie>;
  onRemoveCompanie(data: ICompanie): void;
  onFilterText: string;
}

const TableCompanies: React.FC<ITableCompanies> = ({
  table,
  onRemoveCompanie,
  onFilterText,
}) => {
  return (
    <TableContainer sx={{ marginTop: 4 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">cnpj</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">endereço</TableCell>
            <TableCell align="right">telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table
            .filter(({ nome }) =>
              nome.toLocaleLowerCase().includes(onFilterText.toLowerCase())
            )
            .map(({ id, nome, cnpj, email, endereço, telefone }) => (
              <TableRow key={id}>
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">{nome}</TableCell>
                <TableCell align="right">{cnpj}</TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">{endereço}</TableCell>
                <TableCell align="right">{telefone}</TableCell>
                <Button
                  onClick={() =>
                    onRemoveCompanie({
                      id,
                      nome,
                      cnpj,
                      email,
                      endereço,
                      telefone,
                    })
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

export default TableCompanies;
