const byteSize = (str) => {
  // write your code here
	if(str=="")return 0;
	 return new Blob([str]).size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
