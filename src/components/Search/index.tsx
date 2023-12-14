import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React from 'react';

export interface ISearch {
  onTextFilter(text: string): void;
}
export const Search: React.FC<ISearch> = ({ onTextFilter }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        mb: 10,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquise pelos Usuários"
        onChange={(e) => onTextFilter(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
};
