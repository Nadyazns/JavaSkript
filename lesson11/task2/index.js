const contacts = [{
        name: 'Zhuravlova',
        phoneNumber: '999-999-9'
    },
    {
        name: 'Alex',
        phoneNumber: '888-888-8'
    },
    {
        name: 'Ann',
        phoneNumber: '555-555-5'
    }

]



const sortContacts = (contacts, incr = true) => {
    if (!Array.isArray(contacts))
        return null;

    const result = contacts
        .sort((a, b) => {
            if (!incr) {
                return b.name.localeCompare(a.name);
            } else {
                return a.name.localeCompare(b.name);
            }
        });

    return result;
};

console.log(sortContacts(contacts));