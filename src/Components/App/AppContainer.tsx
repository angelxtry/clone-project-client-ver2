import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { IS_LOGGED_IN } from './AppQueries';
import AppPresenter from './AppPresenter';

import { theme } from '../../theme';
import GlobalStyle from '../../global-style';

const AppContainer = (): JSX.Element => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
  );
};

export default AppContainer;
