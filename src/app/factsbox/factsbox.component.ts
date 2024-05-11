import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-factsbox',
  standalone: true,
  imports: [],
  templateUrl: './factsbox.component.html',
  styleUrl: './factsbox.component.css'
})
export class FactsboxComponent{

  @Input() countryName = '';

  //ngOnChanges(changes: SimpleChanges) {
    //console.log(changes)
  //}
}

