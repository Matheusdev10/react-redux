import React, { useState } from 'react';

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
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IFormalization } from '../../store/features/formalizations/Slice';

export interface ITableFormalizations {
  table: Array<IFormalization>;
}

export const TableFormalization: React.FC<ITableFormalizations> = ({
  table,
}) => {
  const regexCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const regexCnpj = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
  const [data, setData] = useState<Array<IFormalization>>([...table]);
  const [sortName, setSortName] = useState<'asc' | 'desc'>('asc');

  const handleSortName = () => {
    const sortedNome = [...table].sort((a, b) => {
      const sortNomeAsc = sortName === 'asc' ? 1 : -1;
      return sortNomeAsc * a.nome.localeCompare(b.nome);
    });

    setData(sortedNome);
    setSortName(sortName === 'asc' ? 'desc' : 'asc');
  };

  return (
    <TableContainer sx={{ marginTop: 4 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              onClick={handleSortName}
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
          {data.map(
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
