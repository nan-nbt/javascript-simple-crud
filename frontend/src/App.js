import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import GroupmList from './components/GroupmList';
import GroupmForm from './components/GroupmForm';

const theme = createTheme();

function App() {
  const [selectedGroupm, setSelectedGroupm] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCreate = () => {
    setSelectedGroupm(null);
    setFormOpen(true);
  };

  const handleEdit = (groupm) => {
    setSelectedGroupm(groupm);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setSelectedGroupm(null);
  };

  const handleFormSuccess = () => {
    setRefreshKey(prev => prev + 1); // Trigger refresh of list
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <GroupmList
          key={refreshKey}
          onEdit={handleEdit}
          onCreate={handleCreate}
        />
        <GroupmForm
          open={formOpen}
          onClose={handleFormClose}
          groupm={selectedGroupm}
          onSuccess={handleFormSuccess}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
