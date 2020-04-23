import React from 'react';
import { Link } from 'react-router-dom';
import useRequest from '../services/useRequest';
import { mutate } from 'swr';

interface Repository {
  full_name: string;
}

const RepositoryList: React.FC = () => {
  const { data: repos, response, requestKey } = useRequest<Repository[]>({
    url: 'users/rocketseat/repos',
  }, {
    suspense: true,
  });

  function handleDelete(name: string) {
    mutate(
      requestKey, 
      { ...response, data: repos?.filter(repo => repo.full_name !== name) },
      false,
    );
  }

  return (
    <ul>
      {repos?.map(repo => (
        <li key={repo.full_name}>
          <Link to={`/detail/${repo.full_name}`}>{repo.full_name}</Link>
          <button type="button" onClick={() => handleDelete(repo.full_name)}>
            Deletar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RepositoryList;
