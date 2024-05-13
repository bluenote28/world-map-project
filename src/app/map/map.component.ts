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


  constructor(private apicall: ApiCallService) { }

  displayCountryData(country: string){
    this.selectedCountry = country

    const data = this.countryData[1]
    console.log(this.countryData)

    for (let x in data){

      if(data[x]['name'] == country){

        this.capital = data[x]['capitalCity']
        this.region = data[x]['region']['value']
        this.income = data[x]['incomeLevel']['value']
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
