import React, { Suspense } from 'react';
import RepositoryList from '../components/RepositoryList';

const List: React.FC = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <RepositoryList />
      <RepositoryList />
      <RepositoryList />
      <RepositoryList />
      <RepositoryList />
    </Suspense>
  );
}

export default List;
