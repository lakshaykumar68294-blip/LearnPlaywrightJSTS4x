interface Point 
{
    x : number;
    y : number;
}

const point_obj : Point =
{
    x : 20,
    y : 30,
}

console.log(point_obj);

point_obj.x = 100;

console.log(point_obj);