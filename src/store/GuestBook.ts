import { action, thunk, computed } from 'easy-peasy';

import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
  entries: [],
  reverseEntries: computed((state) => state.entries.slice().reverse()),
  setEntries: action((state, entries) => {
    state.entries = entries;
  }),
  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),
  createEntry: thunk(async (state, entry) => {
    const response = await fetch('http://localhost:5454/entries', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
    const result = await response.json();
    state.addEntry(result);
  }),
  getEntries: thunk(async (state) => {
    const response = await fetch('http://localhost:5454/entries');
    const entries = await response.json();
    state.setEntries(entries);
  }),
};

export default GuestBook;
