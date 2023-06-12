import {
  Component,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
  implements OnInit, DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
   {
  quantidade: number = 0;
  constructor() { }
  ngOnDestroy(): void {
    console.log("goodbye my friend");
  }
  adicionar() {
    this.quantidade += 1;
  }
  decrementar() {
    this.quantidade -= 1;
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("NgDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

}
