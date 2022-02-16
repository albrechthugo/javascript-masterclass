let host = "localhost";
let port = "3000";
let endpoint = "users";

// sem template literal
let url = "http://" + host + "/" + port + "/" + endpoint;
console.log(url);

// com template literal
url = `http://${host}/${port}/${endpoint}`;
console.log(url);

// com template literal pode ser escrito o codigo fonte quebrando linha na string
let query = `SELECT * FROM user
             WHERE user.id IS 1`;

console.log(query);
