import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const generatedContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...contacts, ...generatedContacts];

    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Generating error', error);
  }
};

generateContacts(5);
