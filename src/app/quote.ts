export class Quote {
    showDescription:boolean;
    constructor(public id:number,public define:string,public details:string,public author:string, public postDate:Date)
    {this.showDescription=false;
    }

}
