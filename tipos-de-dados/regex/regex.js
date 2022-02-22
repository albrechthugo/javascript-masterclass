let regex = /^\w+@\w+(\.\w{2,3})+$/;
console.log(typeof regex);

// tbm pode ser declarada via = new RegExp('john@gmail.com')

let resultExec = regex.exec("john@gmail.com");
console.log(resultExec);
