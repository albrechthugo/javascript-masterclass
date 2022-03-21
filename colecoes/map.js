const timeUnits = new Map();

timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);

console.log(timeUnits);
console.log(timeUnits.size);

timeUnits.forEach((value, key) => {
  console.log(value, key);
});

console.log(timeUnits.has("hour"));
console.log(timeUnits.has("day"));
console.log(timeUnits.get("hour"));
console.log(timeUnits.get("day"));

timeUnits.delete("hour");
console.log(timeUnits);

timeUnits.clear();
console.log(timeUnits);

// as chaves do mapa podem ser de qualquer tipo, nao apenas de string ou sybom como é no objeto
