import FormUsers from '../../components/FormUsers';
import { Container } from '@mui/material';
import { addNewUser } from '../../store/features/users/Slice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import TableUsers from '../../components/TableUsers';
const Users = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.user);
  return (
    <Container>
      <FormUsers onSubmit={(data) => dispatch(addNewUser(data))} />
      <TableUsers table={users} />
    </Container>
  );
};

export default Users;
