import { Component } from '@angular/core';
import { FactsboxComponent } from '../factsbox/factsbox.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [FactsboxComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  countries = document.getElementsByTagName('path')
  selectedCountry = ""


  displayCountryData(country: string){
    this.selectedCountry = country
    console.log(this.selectedCountry)
  }


}
