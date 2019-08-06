#!/bin/node

"use strict"

class gameOfCards{
    constructor(cards_andrea, cards_maria) {
	this.c_andrea = cards_andrea || [1,2,3]
	this.c_maria  = cards_maria  || [2,1,3]
	
	this.total_num_cards = this.c_andrea.length

	this.maria_total = 0
	this.andrea_total = 0
	this.loop_index = 0
    }

    _compute_step(l_index, event) {

	//get the first card from stack
	let card_maria = this.c_maria[l_index]
	let card_andrea = this.c_andrea[l_index]

	if (event == 'even') {
	    this.maria_total += card_maria - card_andrea
	    this.andrea_total += card_andrea - card_maria	    		    
	}
	else{
	    console.log('Odd event.')
	}
	
	//now print output
	console.log(`Maria card: ${card_maria}  Total maria: ${this.maria_total}\n`)
	console.log(`Andrea card: ${card_andrea} Total Andrea: ${this.andrea_total} \n`)

	return ;
    }

    flips(start_event) {	
//	console.log(`entering flips: ${this.c_andrea} and ${this.total_num_cards} `)

	if (this.loop_index < this.total_num_cards) {
	    
	    //console.log(this.loop_index)

	    switch(start_event) {
	    case 'even':
		this._compute_step(this.loop_index, 'even')
		this.loop_index += 1	    		
		this.flips('odd')
		break;
	    case 'odd':
		this._compute_step(this.loop_index, 'odd')
		this.loop_index += 1
		this.flips('even')
		break;
	    default:
		console.log('game cannot start because input is neither even nor odd')
		
	    }

	}else {
	    
	    let winner = (this.maria_total > this.andrea_total)? "maria":"andrea"
	    console.log(winner)
	}


    }

}


if (require.main === module) {    
    let start_event = 'even'
    let cards_andrea = [1,2,3]
    let cards_maria  = [2,1,3]
    let goc = new gameOfCards(cards_andrea, cards_maria)
    goc.flips(start_event)

} else {
    console.log('required as a module');
}
