import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  function handleClickUsers() {
    navigate('/users');
  }

  function handleClickCompanies() {
    navigate('/companies');
  }

  function handleClickFormalization() {
    navigate('/formalization');
  }
  const navigate = useNavigate();
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      gap={4}
    >
      <Button
        onClick={handleClickUsers}
        sx={{ marginInline: 'auto', width: '50%' }}
        variant="contained"
      >
        Usuários
      </Button>
      <Button
        onClick={handleClickCompanies}
        sx={{ marginInline: 'auto', width: '50%' }}
        variant="contained"
      >
        Empresas
      </Button>
      <Button
        onClick={handleClickFormalization}
        sx={{ marginInline: 'auto', width: '50%' }}
        variant="contained"
      >
        Formalizações
      </Button>
    </Box>
  );
};

export default Home;
