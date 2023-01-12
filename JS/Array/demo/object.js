/*let iphone14 = {
    version: "Promax",
    colors: "Deep purple",
    storage: "1TB",
    producer: "JPN",
}*/


let students = [
    {
        name: "Nguyen Van A",
        dob: "23/4/2000",
        gender: "Male",
        results: { math: 6, physics: 7, chemistry: 8 },
    },
    {
        name: "Tran Thi C",
        dob: "26/3/2000",
        gender: "FeMale",
        results: { math: 5, physics: 3, chemistry: 6 },
    },
    {
        name: "Trinh Thi B",
        dob: "31/7/2000",
        gender: "Female",
        results: { math: 8, physics: 9, chemistry: 10 },
    },
]
for ( let i=0; i<students.length; i++){
    console.log(`${students[i].name} - Math: ${students[i].results.math},  Physics: ${students[i].results.physics},  Chemistry: ${students[i].results.chemistry},`);
}

