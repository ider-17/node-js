import chalk from 'chalk';


// console.log(chalk.blue('Hello world!'));
// console.log(chalk.bgGreen('haha'));

// // const fs = require('node:fs');
import fs from 'fs'
import { queryObjects } from 'v8';
// import path from 'node:path';
// const content = 'Some content!';

// fs.writeFile('./test.txt', content, err => {
//     if (err) {
//         console.error(err)
//     } else {
//         // file written successfully
//     }
// });
// console.log(fs.readFile(test.txt));



// const filenames = fs.readdirSync('Users/24LP6042/Desktop/ider/node-js');
// for (let i = 0; i < filenames.length; i++) {
//     console.log(filenames[i]);
// }



// fs.writeFile('./text.txt', 'Hello world', (err) => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log('no');

//     }
// });

// console.log(fs.readFile(text.txt));




// const createdFile = fs.writeFileSync('./test.txt', 'Hello world');
// console.log(createdFile);

// let unshsanFile = fs.readFileSync('./test.txt', 'utf-8');

// fs.appendFileSync('./test.txt', 'Bye')
//     console.log('Updated!');

// const unshih = fs.readFileSync('./test.txt', 'utf-8')
// console.log(unshih);

// let a = fs.writeFileSync('./test.txt', 'Byetai')
//     console.log(a);





// const b = fs.readFileSync('./students.json', 'utf-8') 
// console.log(b);


// let myObject = JSON.parse(b);

// let newData = {
//     "name": "ider",
//     "sit": "1C"
// }

// myObject.push(newData);

// newData = JSON.stringify(myObject);

// fs.writeFile('students.json', newData, err => {
//     if (err) throw err;

//     console.log("New data edded");

// })




// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });

// console.log(obj.name + "," + obj.birth);




// let myObj = {
// 	'prop_1': {
// 		'prop_11': 'value_11',
// 		'prop_12': 'value_12'
// 	}
// };

// function removeJsonAttr() {
// 	let key = "prop_12";
// 	delete myObj.prop_1[key];

// 	console.log(JSON.stringify(myObj));
// }

// removeJsonAttr();





// const a = fs.readFileSync('./students.json', 'utf-8');

// const b = JSON.parse(a)

// let c = b.filter(function (e) {
//     return e.name !== 'Jack';
// });

// console.log(c);





// var a = [{name:'tc_001'}, {name:'tc_002'}, {name:'tc_003'}]

// var b = a.filter(function (e) {
//     return e.name === 'tc_001';
// });

// b.splice(0,1);

// console.log(a);
// console.log(b);





// // 1 . create

// function createStudent() {
//     const create = fs.writeFileSync('student.json', '[{"name": "Ider", \n"seat": "1C", \n"id": "1"}]')
// }

// createStudent()

// // 2. read & add

// function readStudent() {
//     const read = fs.readFileSync('student.json', 'utf-8');
//     const data = JSON.parse(read)
//     //    return data
//     data.push({ "name": "Jack", "seat": "1A", "id": "2" })
//     fs.writeFileSync('student.json', JSON.stringify(data))

// };
// readStudent();

// function readStudents() {
//     const unshih = fs.readFileSync('student.json', 'utf-8');
//     const medeelel = JSON.parse(unshih, function (id) {
//         if (id = "2") {
//             name = "Jackie"
//             return "done"
//         } else {
//             return "fail"
//         };
//     });

// }

// readStudents()



// ---> done

// function readStudents(id) {
//     const json = fs.readFileSync('student.json', 'utf-8');
//     const data = JSON.parse(json);

//     if (id) {
//         return data.find((student) => student.id == id)
//     }

//     return data 
// }

// console.log(readStudents(3));

// function updateStudent(id, student) {
//     const json = fs.readFileSync("student.json", "utf8");
//     const data = JSON.parse(json);

//     for (let i = 0; i < data.length; i++) {
//         if (data[i].id == id) {
//             // spread operator
//             data[i] =  { ...data[i], ...student };
//         }

//     }

//     fs.writeFileSync('student.json', JSON.stringify(data));

// }

// updateStudent("3", { seat: "10" });

// ---> end




// ---> done

function readStudents(id) {
    const json = fs.readFileSync('student.json', 'utf-8');
    const data = JSON.parse(json);

    if (id) {
        return data.find((student) => student.id == id)
    }

    return data
}

console.log(readStudents(3));

function updateStudent(id, newStudent) {
    const json = fs.readFileSync("student.json", 'utf-8');
    const data = JSON.parse(json);

    //  map

    const newData = data.map((oldStudent) => {
        if (oldStudent.id == id) {
            oldStudent - { ...oldStudent, ...newStudent }
        }

        return oldStudent;
    })

    fs.writeFileSync('student.json', JSON.stringify(data));

}

updateStudent("3", { seat: "10" });

// ---> end