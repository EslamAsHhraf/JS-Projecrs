function multiply(...numbers)
{
  let result = 1;
  let flag=false;
  for (let i = 0; i < numbers.length; i++)
  {
    if (typeof numbers[i] !== "string")
    {
      flag=true;
      result*=parseInt(Number(numbers[i]));
    }
  }
  if(flag)
    console.log(result);
  else
    console.log(0);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
//Add from me
multiply("A", "B", "50"); // 0
multiply(true);//1