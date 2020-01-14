import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStoreState } from '../../hooks';


const Home: React.FC = () => {
  const entries = useStoreState(state => state.guestbook.entries);
  return (
    <div>
      {
        entries.map((entry) => (
          <Card>
            <CardContent>
              <Typography variant="h2">
                {entry.name}
              </Typography>
              <Typography variant="body1">
                {entry.content}
              </Typography>
              <Typography variant="caption">
                {entry.submitted.toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        ))
      }
    </div>
  );
};

export default Home;
