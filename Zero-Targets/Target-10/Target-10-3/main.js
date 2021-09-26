let start = 1;
let end = 6;
let breaker = 2;

// Output
for (let i = start; i <= end; i++)
{
    console.log(String(i));
    for (let j = breaker; j < end; j+=2)
    {
        console.log(`-- ${j}`);
    }
}
