import { Container } from '@mui/material';

import FormCompanies from '../../components/FormCompanies';
import TableCompanies from '../../components/TableCompanies';
import {
  handleAddCompanies,
  handleRemoveCompanies,
  handleFilterCompanies,
} from '../../store/features/companies/Action';
import { RootState } from '../../store/index';
import { useSelector } from 'react-redux';
import { Search } from '../../components/Search';

const Companies = () => {
  const { companies, filterText } = useSelector(
    (state: RootState) => state.companie
  );
  return (
    <Container>
      <FormCompanies onSubmit={handleAddCompanies} />
      <Search onTextFilter={handleFilterCompanies} />
      <TableCompanies
        table={companies}
        onRemoveCompanie={handleRemoveCompanies}
        onFilterText={filterText}
      />
    </Container>
  );
};

export default Companies;
