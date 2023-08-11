// import { Dashboard } from '@src/pages/Dashboard';
import { LayoutContextProvider } from '@src/context/LayoutContext';
import { Router } from '@src/routes/Router';

export const App = () => {
  return (
    <LayoutContextProvider>
      <Router />
    </LayoutContextProvider>
  );
};
