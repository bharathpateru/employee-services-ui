import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  simpleObserver: Observable<number> = new Observable();
  stringObserver: Observable<any> = new Observable();

  data:any[]=[];
  constructor() { 
  }

  ngOnInit(): void {
 this.simpleObserver = new Observable<number>(
  (listener)=>{

    listener.next(1),
    listener.next(2),
    setTimeout(()=>listener.next(3),1000),
    setTimeout(()=>listener.next(4),1000)
  }
)

this.stringObserver = new Observable(
  (intimate)=>{
    intimate.next("First"),
    intimate.next("second")
    intimate.next("third"),
    intimate.error("error"),
    intimate.complete();
  })

  }

sub2(){
  this.stringObserver.subscribe({
    next: (d)=>{ this.data.push(d);
      console.log(this.data);},
    error: (err)=>{console.log(err)},
    complete: ()=>{console.log("completed")}
  }
  )}

 

  test(){
    this.simpleObserver.subscribe(
      (data1)=>{console.log(data1)},
      (err)=>{console.log(err)},
      ()=>{console.log("completed")}
    )
  }
}
