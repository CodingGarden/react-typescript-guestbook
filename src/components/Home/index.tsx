import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStoreState, useStoreActions } from '../../hooks';
import GuestBookEntryForm from '../GuestBookEntryForm';
import useStyles from './styles';

const Home: React.FC = () => {
  const reverseEntries = useStoreState((state) => state.guestbook.reverseEntries);
  const getEntries = useStoreActions((state) => state.guestbook.getEntries);
  const classes = useStyles();

  useEffect(() => {
    getEntries();
  }, []); // eslint-disable-line
  return (
    <div>
      <GuestBookEntryForm />
      {
        reverseEntries.map((entry) => (
          <Card className={classes.entryCard} key={entry.id}>
            <CardContent>
              <Typography variant="h2">
                {entry.name}
              </Typography>
              <Typography variant="body1">
                {entry.content}
              </Typography>
              <Typography variant="caption">
                {entry.submitted}
              </Typography>
            </CardContent>
          </Card>
        ))
      }
    </div>
  );
};

export default Home;
