#!/bin/node

"use strict"

const SOURCE_1 = [{"a": 1}, {"b":2}, {"c":3}, {"d": 4}, {'e':5}]
const SOURCE_2 = [{"a": 11}, {"b":22}, {"c":33}, {"d": 44}]
const SOURCE_3 = [{"a": 111}, {"b":222}, {"c":333}, {"d": 444}]
const SOURCE_4 = [{"a": 1111}, {"b":2222}, {"c":3333}, {"d": 4444}]


const SOURCES = [SOURCE_1, SOURCE_2, SOURCE_3, SOURCE_4]  //assuming the increasing order of preference. Source_4 is most preferred.

class Eliminate{
    constructor(source_array) {
	this.eliminate_struct = {} 
	this.sarray = source_array;
    }

    exec() {
	this.sarray.map( source => {	    
	    source.map( element => {		
		let key = Object.keys(element)[0]
		let val = element[key]
		
		if (Object.keys(this.eliminate_struct).includes(key)) {
		    this.eliminate_struct[key] = val
		}else {
		    this.eliminate_struct[key] = val
		}
	    })
	})
    }
    

}



if (require.main === module) {    
    let eliminate = new Eliminate(SOURCES)
    eliminate.exec()
    console.log(eliminate.eliminate_struct)
} else {
    console.log('required as a module');
}
