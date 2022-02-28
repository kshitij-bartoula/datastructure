//hello
class Node
{
	  constructor(value)
	  {
		  this.value=value;
	      this.next=null;
	  }
}
class stack
{
	constructor()
	{
		this.array=[];
	}
	peek()
	{
        //console.log(this.array);
		return this.array[this.array.length-1];
		
	}
	push(value)
	{
		//this.array.push(value);
		//console.log(this.array);
		return this;
	}
	pop()
	{
		
		this.array.pop();
		console.log(this.array);
		return this;
	}
}

const myStack=new stack();
//myStack.push('mat');
//myStack.push('science');
//myStack.push('social');
//myStack.peek();
//myStack.pop();

