import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { customTheme } from './theme/customTheme';
import DashBoard from './pages/dashboard'

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <DashBoard />
    </ThemeProvider>
  );
};

export default App;
