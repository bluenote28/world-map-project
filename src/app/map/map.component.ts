import { Component } from '@angular/core';
import { FactsboxComponent } from '../factsbox/factsbox.component';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [FactsboxComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  countryData: any
  selectedCountry = ""
  region = ""
  income = ""
  capital = ""
  countryName = ""
  latitude = ""
  longitude = ""


  constructor(private apicall: ApiCallService) { }

  displayCountryData(country: string){
    this.selectedCountry = country.toUpperCase()

    const data = this.countryData[1]
    console.log(this.countryData[1])

    for (let x in data){

      if(data[x]['iso2Code'] == this.selectedCountry){

        this.capital = data[x]['capitalCity']
        this.region = data[x]['region']['value']
        this.income = data[x]['incomeLevel']['value']
        this.countryName = data[x]['name']
        this.latitude = data[x]['latitude']
        this.longitude = data[x]['longitude']
        break
      }
    }   
  }

  loadData(){

    this.apicall.getCountryData().subscribe(country => {
      this.countryData = country
    })

  }

  ngOnInit() {
    this.loadData();
  }

}
