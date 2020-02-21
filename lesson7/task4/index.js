const getMessagesForBestStudents = (allstudents, failedstudents) =>
    allstudents
    .filter(name => !failedstudents.includes(name))
    .map(name => 'Good job, ' + name);

// const getMessagesForBestStudents = (allstudents, failedstudents) => {
//     const bestStudents = allstudents
//         .filter(name => !(failedstudents.indexOf(name) !== -1));
//     const message = bestStudents.map(name => 'Good job, ' + name);
//     return message;
// };

// const allstudents = ['Ann', 'Tom', 'Bob', 'Ched', 'Amy'];
// const failedstudents = ['Tom', 'Amy'];

// console.log(getMessagesForBestStudents(allstudents, failedstudents));