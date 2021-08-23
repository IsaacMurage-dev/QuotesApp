export class Quote {
    showDescription:boolean;
  upvote: number;
  downvote:number;
    constructor(public id:number,public define:string,public details:string,public author:string, public postDate:Date)
    {this.showDescription=false;
        this.upvote=0;
        this.downvote=0;
    }

}
