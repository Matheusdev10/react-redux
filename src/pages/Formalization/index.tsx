import { Container } from '@mui/material';
import { FormFormalization } from '../../components/FormFormalization';
import { handleAddFormalization } from '../../store/features/formalizations/Action';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { TableFormalization } from '../../components/TableFormalization';

export const Formalization = () => {
  const { formalizations } = useSelector(
    (state: RootState) => state.formalization
  );

  return (
    <>
      <Container>
        <FormFormalization onSubmit={handleAddFormalization} />
        <TableFormalization table={formalizations} />
      </Container>
    </>
  );
};
