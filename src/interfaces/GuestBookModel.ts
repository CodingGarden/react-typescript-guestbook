import { Action, Thunk, Computed } from 'easy-peasy';

import GuestBookEntry from './GuestBookEntry';

export default interface GuestBookModel {
  entries: GuestBookEntry[];
  reverseEntries: Computed<GuestBookModel, GuestBookEntry[]>;
  setEntries: Action<GuestBookModel, GuestBookEntry[]>;
  addEntry: Action<GuestBookModel, GuestBookEntry>;
  createEntry: Thunk<GuestBookModel, GuestBookEntry>;
  getEntries: Thunk<GuestBookModel>;
}
