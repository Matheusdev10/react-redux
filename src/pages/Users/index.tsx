import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TableUsers from '../../components/TableUsers';
import FormUsers, { Inputs } from '../../components/FormUsers';
import { Container } from '@mui/material';

export interface Users extends Inputs {
  id: string;
}

const Users = () => {
  const [table, setTable] = useState<Array<Users>>([]);

  const onSubmit = (props: Inputs) => {
    setTable((prevState) => [...prevState, { ...props, id: uuid() }]);
  };

  return (
    <Container>
      <FormUsers onSubmit={onSubmit} />
      <TableUsers table={table} />
    </Container>
  );
};

export default Users;
