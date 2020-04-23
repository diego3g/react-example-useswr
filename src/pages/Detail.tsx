import React from 'react';
import { useParams } from 'react-router-dom';
import useRequest from '../services/useRequest';

interface Repository {
  full_name: string;
  description: string;
}

interface Issue {
  id: number;
  title: string;
}

const Dashboard: React.FC = () => {
  const { full_name } = useParams();

  const { data: repo } = useRequest<Repository>({
    url: `repos/${full_name}`
  })

  const { data: issues } = useRequest<Issue[]>({
    url: `repos/${full_name}/issues`
  })

  if (!repo) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{repo.full_name}</h1>
      <p>{repo.description}</p>

      <ul>
        {issues?.map(issue => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
