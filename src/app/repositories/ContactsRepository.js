const { uuid } = require('uuidv4');

const contacts = [

    {

        id: uuid(),
        name: 'Cosmo',
        email: 'cosmo@email',
        phone: '85988748151',
        category_id: uuid()


    },


];

class ContactsRepository {

    findAll() {

        return new Promise((resolve) => {
            
            resolve(contacts);

        });
    }

}


module.exports = new ContactsRepository();