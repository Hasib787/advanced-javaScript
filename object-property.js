const student = [
    { id: 45, name: 'Hasib' },
    { id: 12, name: 'Rakib' },
    { id: 78, name: 'hasan' }
];
// old way
const output=[];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const allName= element.name;
    output.push(allName);   
}
console.log(output);
//new way
const names = student.map(studentName => studentName.name);
const sFind = student.filter(sName => sName.id > 40);
const sFind1 = student.find(sName => sName.id > 40);
console.log(sFind1);
