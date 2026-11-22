interface Point 
{
     readonly x : number;
     readonly y : number;
}

const point_obj : Point =
// here const keyword stand for object reference not for x , y
{
    x : 20,
    y : 30,
}

console.log(point_obj);

// point_obj.y = 200;
//Error: Cannot assign to 'y' because it is a read-only property.
// console.log(point_obj);

