"use strict";

const learningSets = new Set([
  "corolla",
  "civic",
  "land cruiser",
  "audi",
  "audi",
]);
console.log(learningSets);

learningSets.add("tesla");
console.log(learningSets);

learningSets.delete("civic");
console.log(learningSets);

console.log(learningSets.has("corolla"));
console.log(learningSets.has("civic"));
console.log(learningSets.size);
// learningSets.clear(); //removes all the elements from the set

// real life use case of sets
const visitorIPs = [
  "192.168.0.1",
  "192.168.0.2",
  "192.168.0.1",
  "10.0.0.5",
  "192.168.0.2",
  "172.16.254.1",
  "10.0.0.5",
  "192.168.0.3",
];

const uniqueIps = new Set(visitorIPs);
console.log(uniqueIps);
console.log(visitorIPs.length);
console.log(uniqueIps.size);

for (const uip of uniqueIps) {
  console.log(uip);
}

// conversion of set into an array by using spread operator
const uniqueIpsArray = [...new Set(visitorIPs)];
console.log(uniqueIpsArray);

const nameSet = new Set("sheharyar");
console.log(nameSet);
