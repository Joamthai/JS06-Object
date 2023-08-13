const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };
console.log(employees.john.address);
//   console.log('john' in employees)
  
  let nameEmploy = prompt("Enter your name")
//   let nameEmploy = 'john'
  let checkEmployee = nameEmploy => {
    if(nameEmploy in employees){
        console.log(`Name: ${nameEmploy}, salary: ${employees[nameEmploy].salary}, address: ${employees[nameEmploy].address.district}, ${employees[nameEmploy].address.province}`)
        // console.log("Good");
    } else {
        console.log("Not Found");
    };
  };

checkEmployee(nameEmploy);

