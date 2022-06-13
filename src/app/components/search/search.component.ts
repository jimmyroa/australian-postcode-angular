import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


 public form: FormGroup;
 suburbs:any[] = []; 
 postcodeSelected:any;
 suburbSelected:string="";
 noResultsMessage:boolean = false;
 suburbsRadius4km:any[] = []; 



  constructor(private searchService:SearchService,
    private fb: FormBuilder) { 
   
      this.form = this.fb.group({
      postcode:['',[Validators.required, Validators.minLength(3)]]
      });
  }
  

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get postcode(){
    return this.form.get('postcode')?.value;
  }

  //GET SUBURBS BY POSTCODE: 
  getSuburb(){
    this.suburbSelected = '';
      this.postcodeSelected = this.form.get('postcode');
      //console.log(this.postcodeSelected?.value);
    
    this.searchService.getSuburbsByPostCode(this.postcodeSelected?.value)
    .subscribe(response =>{
      if(response.length === 0){
        console.log("Result of search: " + response.length);
        this.noResultsMessage = true;
      }
      else{
        this.noResultsMessage = false;
      }
        this.suburbs = response;
    });
  }


  //GET SUBURBS WITHIN 4KM OF THE POSTCODE SELECTED: 
  getSuburbs4km(suburb:string, latitude:number, longitude:number){
    
    window.scrollTo(0, 500);
    this.suburbSelected = suburb;
    const distance = 4000;

    this.searchService.getSuburbsByRadius4km(latitude, longitude, distance)
    .subscribe(response =>{
      this.suburbsRadius4km = response;
    });
  }



}
