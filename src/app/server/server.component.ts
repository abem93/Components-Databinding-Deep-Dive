import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.Emulated// None, Native
})
export class ServerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input('srvElement') element: {type: string, name:string, content:string};
  @Input() name:string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor(){
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('NgOnChanges Called!')
    console.log(changes)
  }

  ngOnInit(){
    console.log('ngOnInit called')
    console.log('text content: ' + this.header.nativeElement.textContent)
  }

  ngDoCheck(){
      console.log("ngDoCheck called!")
  }

  ngAfterContentInit(){
      console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('text content: ' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
        console.log('ngOnDestroy called!')
  }
}
