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



const sortContacts = contacts => {
    if (!Array.isArray)
        return null;
    const result = contacts
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    return result;
};

console.log(sortContacts(contacts));