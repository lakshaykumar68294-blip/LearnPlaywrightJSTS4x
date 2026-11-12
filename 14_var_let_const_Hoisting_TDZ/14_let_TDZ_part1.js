
// ---- TDZ for "score" starts here ----(variable exists in memory but uninitialized)
 console.log(score);  // ReferenceError!
 score = 50;          // ReferenceError!
 typeof score;        // ReferenceError!
// ---- TDZ for "score" ends here ----
let score = 100;        // Declaration reached, TDZ ends
console.log(score);     // 100 (safe to access now)

//ERROR-- cannot access score before initialization