import { Component } from '@angular/core';
import {DialogueWiseService,DialogueWiseRequest} from 'dialogue-wise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Dialogue Wise Api';
  wheelCount:number;
  message:string;
  loading:boolean;

  constructor(private dialoguewise:DialogueWiseService){}

  ngOnInit(){
    this.loading=false;
  }

  public getContent()
  {
    this.loading=true;
    var request:DialogueWiseRequest = new DialogueWiseRequest();
    request.apiKey="b1266377591c4f2a9494c3abdd2cac5381D6Z825D26CEBAE8B6rn";
    request.dialogueName="demo-dialogue";
    request.emailHash='/kgmM46s1xC56BOFWRZp4j+0bdU19URpXdNT9liAX50=';
    request.variableList = new Map<string,number>();
    request.variableList.set("@wheel",this.wheelCount);

    this.dialoguewise.getDialogue(request).subscribe(res=>
        this.message=res.dialogue
      ,null,()=>{
        this.loading=false;
      });
  }
}
