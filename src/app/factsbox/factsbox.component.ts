import { Component, Input, OnChanges, SimpleChanges, input } from '@angular/core';

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
  @Input() countryLatitude = ''
  @Input() countryLongitude = ''


  //ngOnChanges(changes: SimpleChanges) {
    //console.log(changes)
  //}
}

