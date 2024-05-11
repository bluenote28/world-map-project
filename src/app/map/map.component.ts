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

  
  getCountryName(element: any){
    
    if (element.attributes.item(2).value == null){
        return element.attributes.value
    }
    else{
     return element.attributes.item(2).value
    }
  }
  
  loadEventHandlers(){
    
    for (let x = 0; x < this.countries.length; x++){

      let element = this.countries[x]
      let name = this.getCountryName(element)

      element.addEventListener('mouseover', () => this.displayCountryData(name))

    }

  }

  displayCountryData(country: string){
    this.selectedCountry = country
    console.log(this.selectedCountry)
  }


}
