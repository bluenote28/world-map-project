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
  @Input() countryRegion = '';
  @Input() countryCapital = ''
  @Input() incomeLevel = ''

  //ngOnChanges(changes: SimpleChanges) {
    //console.log(changes)
  //}
}

