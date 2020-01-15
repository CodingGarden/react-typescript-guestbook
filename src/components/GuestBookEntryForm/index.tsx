import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import useStyles from './styles';
import GuestBookEntry from '../../interfaces/GuestBookEntry';
import { useStoreActions } from '../../hooks';

const GuestBookEntrySchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Required.'),
  content: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 characters.')
    .max(200, 'Can be no longer than 200 characters')
    .required('Required.'),
});

const GuestBookEntryForm: React.FC = () => {
  const classes = useStyles();
  const createEntry = useStoreActions((state) => state.guestbook.createEntry);
  const {
    register, handleSubmit, errors, reset,
  } = useForm<GuestBookEntry>({
    validationSchema: GuestBookEntrySchema,
  });
  const onSubmit = (data: GuestBookEntry): void => {
    createEntry(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={classes.formContainer}
    >
      <TextField
        inputRef={register}
        label="Name"
        name="name"
        fullWidth
        variant="outlined"
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ''}
      />
      <TextField
        inputRef={register}
        multiline
        rows={3}
        label="Content"
        name="content"
        error={!!errors.content}
        helperText={errors.content ? errors.content.message : ''}
        fullWidth
        variant="outlined"
      />
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" color="primary" variant="contained">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};

export default GuestBookEntryForm;
