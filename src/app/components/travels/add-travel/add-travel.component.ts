import { Component, OnInit, ViewChild, ElementRef, NgZone, Output ,EventEmitter} from '@angular/core';
import { FormGroup,FormControl, NgForm, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Travel } from '@app/classes/Travel';
import { Passenger } from '@app/classes/Passenger';
import { ServerService } from '@app/service/server.service';
import { AddTravel } from '@app/classes/AddTravel';
import { MapsAPILoader } from '@agm/core';
import { marker } from '@app/classes/marker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
  searchControl: FormControl;
  @Output() addTravel1=new EventEmitter<Travel>();
   @ViewChild("search",{static:true})
  public searchElementRef: ElementRef;
  marker: marker;
address:string="";
dayslist:string="";
  days: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  colordis=["איסוף","פיזור"];
  groupNames;

  formData:FormData=new FormData();

  form;
  // passengers:Passenger[]=[new Passenger("משה","אידלסון 9 ירושלים"),new Passenger("חיים לנאל","זרחי 5 ירושלים")]
  addTravel:AddTravel
  travel:Travel;
  arr:Array<any>=[];
  load:boolean= false;
  travelCode :number ;
  constructor( private server:ServerService,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private router:Router) {
    // this.form = this.fb.group({
    //   checkArray: this.fb.array([], [Validators.required])
    // })
  }
  ngOnInit() {
    this.setCurrentPosition();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.address=place.formatted_address
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.marker = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
	          draggable: true,
          };
          console.log(this.marker);
        });
      });
    })
    this.server.getGroupsNames('Customer').subscribe(data=>{
      this.groupNames=data
      console.log(this.groupNames);
    })
    this.form=new FormGroup({
      GroupName:new FormControl("", [Validators.required]),
      CollectionOrDispersing:new FormControl("", [Validators.required]),
      // DestinationOrSource:new FormControl(),
      Hour:new FormControl("", [Validators.required]),
      // Frequency:new FormControl(),
      dayList : new FormControl("", [Validators.required]),
      // filePath:new FormControl(),
      DateOfBegin:new FormControl("", [Validators.required]),
      DateOfEnd:new FormControl("", [Validators.required]),
      searchControl :new FormControl("", [Validators.required])
    });
  }
  onSubmitForm(frm){
    this.load=true
    this.travel=frm;
    debugger
    this.addTravel1.emit(this.travel);
    frm.dayList.forEach(element => { this.dayslist=this.dayslist.concat(element+',')});
    this.travel.Frequency = this.dayslist.substring(0, this.dayslist.length - 1);
    this.travel.DestinationOrSource=this.address
    this.travel.Latitude=this.marker.lat
    this.travel.Longitude=this.marker.lng
    debugger
    // this.addTravel=new AddTravel(this.travel,this.passengers);
    this.formData.append("data",JSON.stringify(this.travel));

    this.server.add('Travel',this.formData).subscribe(data=>{      
      this.travelCode=data;
      this.load=false;
      this.router.navigate(["/tracks",this.travelCode]);
      console.log(this.travelCode);
    }
    
    );
    
    // this.server.addObject('Travel',this.addTravel);
    console.log("travel code"+this.travelCode);
    console.log(frm);
  } 
  public hasError = (controlName: string, errorName: string) =>{

    return this.form.controls[controlName].hasError(errorName);
  }
 
  // בעת בחירת קובץ נוסעים
  onSubmit(fileInput: any){
    this.formData.append("file", <File>fileInput.target.files[0],);
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {       
        this.marker = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
	          draggable: true,
          };
          console.log(this.marker);
      });
    }
  }
}
