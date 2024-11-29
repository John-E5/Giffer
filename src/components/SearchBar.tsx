import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: 600, margin: '20px auto' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search GIFs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;