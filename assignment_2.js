//question number 1
var a=-5;
var b=-2;
var c=-6;
var d=-1;
var e=0;


if(a > b && a > c && a > d && a > e)
{
    
    console.log("largest numbers is : " +a);
}
else if(b > a && b > c && b > d && b > e)
{
    
    console.log("largest numbers is : " +b);
}
else if(c > a && c > b && c > d && c > e)
{
    
    console.log("largest numbers is : " +c);
}
else if(d > a && d > b && d > c && d > e)
{
    
    console.log("largest numbers is : " +d);
}
else if(e > a && e > b && e > c && e > d)
{
    
    console.log("largest numbers is : " +e);
}
else{
    console.log("can't find out");
}


//question number 2

for ( var i = 1; i <= 100; i++ )
{
  
  if ( i%3 === 0 ) 
  {
    console.log(i+ "Ami" );
    if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + "AmiTumi" );
    
  }
    
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ "Tumi" );
   
  }
  else
  {
    console.log(i);
  }
}


//question number 3
let array= [1,2,3,4,5];
array = [0].concat(array);
console.log(" After add items to the beginning : " +array);
array.splice(0,1);
console.log("After deleting : " + array);

////question number 4

myColor = ["Red", "Green", "White", "Black"];
console.log('"'+myColor.toString()+'"');
console.log('"'+myColor.join()+'"');
console.log('"'+myColor.join('+')+'"');

//question number 5

var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}


//question number 6
function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log("First non-repeated character : "+find_FirstNotRepeatedChar('abacddbec'));