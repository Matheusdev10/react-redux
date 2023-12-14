import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import FormUsers from '../../components/FormUsers';
import TableUsers from '../../components/TableUsers';
import { RootState } from '../../store/index';
import {
  handleAdd,
  onRemove,
  handleFilterText,
} from '../../store/features/users/Action';
import { Search } from '../../components/Search';

const Users = () => {
  const { users, filterText } = useSelector((state: RootState) => state.user);
  return (
    <Container>
      <FormUsers onSubmit={handleAdd} />
      <Search onTextFilter={handleFilterText} />
      <TableUsers table={users} onRemove={onRemove} textFilter={filterText} />
    </Container>
  );
};

export default Users;
