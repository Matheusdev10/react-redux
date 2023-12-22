import React, { useState } from 'react';

import { format, addHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { IFormalization } from '../../store/features/formalizations/Slice';

export interface ITableFormalizations {
  table: Array<IFormalization>;
}

export const TableFormalization: React.FC<ITableFormalizations> = ({
  table,
}) => {
  const regexCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const regexCnpj = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;

  const [ordenar, setOrdenar] = useState<Array<IFormalization>>(table);
  const [order, setOrder] = useState('ASC');

  function handleOrdenarNome() {
    const ordenarNome = [...ordenar];
    ordenarNome.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
    setOrdenar(ordenarNome);
    console.log(ordenarNome);
  }
  return (
    <TableContainer sx={{ marginTop: 4 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              onClick={handleOrdenarNome}
              sx={{ cursor: 'pointer' }}
              align="center"
            >
              nome
            </TableCell>
            <TableCell align="center">cpf/cnpj</TableCell>
            <TableCell align="center">produto</TableCell>
            <TableCell align="center">data</TableCell>
            <TableCell align="center">tipo cadastro</TableCell>
            <TableCell align="center">status</TableCell>
            <TableCell align="center">ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map(
            ({ id, nome, cpfCnpj, data, produto, tipoCadastro, status }) => (
              <TableRow key={id}>
                <TableCell align="center">{nome}</TableCell>

                <TableCell align="center">
                  {cpfCnpj.length === 11
                    ? cpfCnpj.replace(regexCpf, '$1.$2.$3-$4')
                    : cpfCnpj.replace(regexCnpj, '$1.$2.$3/$4-$5')}
                </TableCell>

                <TableCell align="center">{produto}</TableCell>
                <TableCell align="center">
                  {format(data, 'dd/MM/yyyy HH:mm', {
                    locale: ptBR,
                  })}
                </TableCell>
                <TableCell align="center">{tipoCadastro}</TableCell>
                <TableCell align="center">{status}</TableCell>
                <TableCell
                  sx={{ cursor: 'pointer', display: 'flex', gap: 2 }}
                  align="right"
                >
                  <PauseCircleOutlineOutlinedIcon />
                  <ThumbDownOffAltOutlinedIcon />
                  <ThumbUpOutlinedIcon />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
