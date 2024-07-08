import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        if (contacts.lenght > 0) {
            contacts.pop();

            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

            console.log('Successfuly remove last contacts.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.log('Error removing last contacts:', error);
    }
};

removeLastContact();
