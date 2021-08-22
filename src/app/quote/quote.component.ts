import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1 ,'Kwani ni Kesho','Aizo','The Badger',new Date(2020,12,30)),
    new Quote(2 ,'Come may, what may','Gwen', 'The Guardian',new Date(2019,2,14)),
    new Quote(3 ,'The grass is greener on the other side ','Varane', 'Raphael',new Date(2019,2,14)),
    new Quote(4 ,'Wherever life plants you, bloom with grace ','Jadon', 'Sancho',new Date(2019,2,15)),
  
    
    
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

  constructor() { }

  ngOnInit() {
  }

}
