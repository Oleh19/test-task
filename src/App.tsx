import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import {DescriptionPage} from './components/DescriptionPage';
import { Home } from './pages/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="test/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DescriptionPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
