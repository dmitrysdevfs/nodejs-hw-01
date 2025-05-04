import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const generatedContact = createFakeContact();
    const updatedContacts = [...contacts, generatedContact];

    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Add contact failed:', error.message);
  }
};

addOneContact();
