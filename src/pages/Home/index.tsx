import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  function handleClickUsers() {
    navigate('/users');
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
      <Button sx={{ marginInline: 'auto', width: '50%' }} variant="contained">
        Empresas
      </Button>
    </Box>
  );
};

export default Home;
