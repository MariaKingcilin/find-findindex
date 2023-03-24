const kings=[
{
	name:"Mariya Kings",
	age:22
},
{
	name:"Anto",
	age:23
},
{
	name:"Sathish",
	age:21
},
{
	name:"Mariya",
	age:23
}
];
let a=kings.find(function(f)
{
	return f.name=="Mariya";
});
console.log(a.name);

let b=kings.findIndex(function(fin)
{
	return fin.age==23;
});
console.log(b);