import { useState } from 'react';
import FormItem, { Inputs } from '../../components/FormItem';
import Table from '../../components/Table';
import { v4 as uuid } from 'uuid';

export interface Users extends Inputs {
  id: string;
}

const Users = () => {
  const [table, setTable] = useState<Array<Users>>([]);

  const onSubmit = (props: Inputs) => {
    setTable((prevState) => [...prevState, { ...props, id: uuid() }]);
  };

  return (
    <div>
      <FormItem onSubmit={onSubmit} />
      <Table table={table} />
    </div>
  );
};

export default Users;
