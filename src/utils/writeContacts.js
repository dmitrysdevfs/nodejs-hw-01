import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.access(PATH_DB);

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
    return updatedContacts;
  } catch (error) {
    console.error('Writing error:', error.message);
    return null;
  }
};
