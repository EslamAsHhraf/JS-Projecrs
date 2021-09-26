let start = 0;
let swappedName = "elZerO";
for (let i = start; i < swappedName.length; i++)
{
    if (swappedName[i] === swappedName[i].toUpperCase())
        swappedName= swappedName.substring(0, i) +  swappedName[i].toLowerCase() + swappedName.substring(i + 1);
    else
        swappedName= swappedName.substring(0, i) +  swappedName[i].toUpperCase() + swappedName.substring(i + 1);
}
console.log(swappedName);
// Output
"ELzERo"