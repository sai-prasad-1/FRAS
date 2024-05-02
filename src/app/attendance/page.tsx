import React, { useState } from 'react';

type Props = {}

type User = {
  id: number;
  name: string;
  email: string;
}

const Page = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    const random = Math.random();

    if (random > 0.5) {
      setError(null);
    } else {
      setUser(null);
      setError('Error: Unable to fetch data.');
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mt-6">
  
      </div>

      {error && <div className="mt-4 text-red-600">{error}</div>}

      
    </div>
  );
}

export default Page;
