const { v4 } = require('uuid');

let contacts = [

    {

        id: v4(),
        name: 'Cosmo',
        email: 'cosmo@email',
        phone: '85988748151',
        category_id: v4()


    },
    {

        id: v4(),
        name: 'Lucas',
        email: 'lucas@email',
        phone: '85988748151',
        category_id: v4()


    },



];

class ContactsRepository {

    findAll() {

        return new Promise((resolve) => resolve(contacts));
    }

    findById(id) {

        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id === id),
        ));

    }

    delete(id) {

        return new Promise((resolve) => {
          contacts =  contacts.filter((contact) => contact.id !== id);
            resolve();
        });

    }

}


module.exports = new ContactsRepository();