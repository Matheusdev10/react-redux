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
import { BasicModal } from '../BasicModal';

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
  const [orderName, setOrderName] = useState<'asc' | 'desc'>('asc');

  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    description: '',
  });

  const handleAprove = () => {
    setModal({
      isOpen: true,
      title: 'Aprovar Cadastro',
      description: 'Tem certeza que deseja aprovar o cadastro',
    });
  };

  const handleReprove = () => {
    setModal({
      isOpen: true,
      title: 'Reprovar Cadastro',
      description: 'Tem certeza que deseja reprovar o cadastro',
    });
  };

  const handleWait = () => {
    setModal({
      isOpen: true,
      title: 'Cadastro em espera',
      description: 'Tem certeza que deseja colocar o cadastro em espera?',
    });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false, title: '', description: '' });
  };

  const handleSortName = () => {
    const sortedNome = [...table].sort((a, b) => {
      const sortNomeAsc = orderName === 'asc' ? 1 : -1;

      console.log(sortNomeAsc * a.nome.localeCompare(b.nome));
      return sortNomeAsc * a.nome.localeCompare(b.nome);

      //acredito que esse localeCompare compara da mesma
      //forma que a função abaixo para ordenar
      // a[nome]<b[nome]?1 : a[nome]>b[nome]?-1:0
    });

    setData(sortedNome);
    setOrderName(orderName === 'asc' ? 'desc' : 'asc');
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
                  {format(new Date(data), "dd/MM/yy ' às ' HH:mm'h'")}
                </TableCell>
                <TableCell align="center">{tipoCadastro}</TableCell>
                <TableCell align="center">{status}</TableCell>
                <TableCell
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'end',

                    gap: 2,
                  }}
                >
                  <ThumbUpOutlinedIcon onClick={handleAprove} />
                  <ThumbDownOffAltOutlinedIcon onClick={handleReprove} />
                  <PauseCircleOutlineOutlinedIcon onClick={handleWait} />

                  <BasicModal
                    isOpen={modal.isOpen}
                    title={modal.title}
                    description={modal.description}
                    onCloseModal={handleCloseModal}
                  />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
