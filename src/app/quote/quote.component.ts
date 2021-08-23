import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1 ,'The road to success and the road to failure are almost exactly the same.','Carl Ray','Colin R. Davis',new Date(2020,12,30)),
    new Quote(2 ,'In this world nothing can be said to be certain, except death and taxes.','The Guardian', 'Benjamin Franklin',new Date(2019,2,14)),
    new Quote(3 ,'When you judge another, you do not define them; you define yourself. ','Varane', 'Wayne Dyer',new Date(2019,2,14)),
    new Quote(4 ,'Life is like a camera. Just focus on what’s important, capture the good times, develop from the negatives, and if things don’t work out, just take another shot. ','Sancho', 'Unknown',new Date(2019,2,15)),
  
    
    
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  slideUpDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  // deleteQuote(index){
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }

  constructor() { }

  ngOnInit() {
  }

}
