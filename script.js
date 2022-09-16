let n = prompt("Enter number");
let fact = 1;
if (!isNaN(n)) {
  for (let i = 1; i <= n; i++) {
    fact *= i;
    document.write(fact + " ");
  }
} else alert("ERROR");
