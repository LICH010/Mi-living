import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoorParametrs } from './doorParametrs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLinear = false;
  firstFormGroup: FormGroup;

  private types:string;
  doorParametrs: DoorParametrs = new DoorParametrs;
  constructor(private _formBuilder: FormBuilder) { }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [null, Validators.required]
    });
  }

  updateType(type:string)
  {
    if (type!=null)
    this.doorParametrs.Type = type;
  }

  updateMechanism(mechanism:string){

    if (mechanism!=null)
    this.doorParametrs.Mechanism = mechanism;
  }

  updatePattern(pattern:string){
    if (pattern!=null)
    this.doorParametrs.Pattern = pattern;
  }
  updateHandle(handle:string){
    if (handle!=null)
    this.doorParametrs.Handle = handle;
  }
  updateMeasure(measure:boolean){
    if (measure)
    {
      this.doorParametrs.Measures = "Yes"
    }
    else{
    this.doorParametrs.Measures = "No";
    }
  }

  clearStepper(stepper:any){
    this.doorParametrs = new DoorParametrs;
    stepper.reset();
  }
 
}
