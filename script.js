//your JS code here. If required.

const student = {
	name:"jonny",
	age:34,
	city:"pune",
	getKeys:()=>{
		return Object.keys(this).filter(keys => keys !== "getKeys")
	}
}

function getkeys(obj){

	return Object.keys(obj)

	
	
}

student.getKeys()
