function checkAccess(isAdmin) {
  //console.log(accessLevel);
    if (isAdmin) {
       let accessLevel = "Full";
    } else {
        let accessLevel = "Limited";
    }
    console.log(accessLevel); 
}
checkAccess(true);   
checkAccess(false);  
