console.log("hugo".length);
console.log("huugo".indexOf("u"));
console.log("huugo".lastIndexOf("u"));
console.log("hugo".toUpperCase());
console.log("HUGO".toLowerCase());

console.log("hugo".charAt(0));
console.log("hugo".charCodeAt(0)); // retorna o caractere na tabela unicode
console.log(String.fromCharCode(84));

// contem, comeca ou termina

console.log("hugo".includes("h"));
console.log("hugo".startsWith("o"));
console.log("hugo".endsWith("h"));

// compara se a string passada por parametro for maior (retorna -1), se for igual (retorna 0), se for menor (retorna 1)

console.log("hugo".localeCompare("hugo"));
console.log("hugo".localeCompare("teste"));
console.log("hugo".localeCompare("abc"));

// metodos q recebem string ou regex por parametro

console.log("C++".match(/\+/g));
console.log("Java".search(/a/));

let javaToEcma = "Javascript".replace("Java", "ecma");
console.log(javaToEcma);

let javascriptToNumber = "Javascript".replace(/a/g, 4);
console.log(javascriptToNumber);

// slice, split, substring

console.log("javascript".slice(0, 4));
console.log("javascript".slice(4));
console.log("javascript".slice(0, -6));
console.log("javascript".slice(-6));
console.log("teste;tesste;test".split(";"));
console.log("javascript".substring(0, 4));
console.log("javascript".substring(4, 0));
console.log("javascript".substring(4));

// padstart, end, concat, trim etc

console.log("java".concat("hugo"));
console.log("hugo".padStart(20, "h"));
console.log("hugo".padEnd(20, "h"));
console.log("   hugo   ".trim());
console.log("   hugo   ".trimStart());
