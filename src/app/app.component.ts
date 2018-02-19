import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoorParametrs } from './doorParametrs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLinear = false;
  private firstFormGroup: FormGroup;
  private secondFormGroup: FormGroup;
  private thirdFormGroup: FormGroup;
  doorParametrs: DoorParametrs = new DoorParametrs;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [false, Validators.required]
    });
  }

  saveParametrs(typeDoor:string, mechanism:string, pattern:string, handle:string,measure:boolean){
    if (typeDoor!=null)
    this.doorParametrs.Type = typeDoor;
    if (mechanism!=null)
    this.doorParametrs.Mechanism = mechanism;
    if (pattern!=null)
    this.doorParametrs.Pattern = pattern;
    if (handle!=null)
    this.doorParametrs.Handle = handle;
    if (measure)
    {
      this.doorParametrs.Measures = "Yes"
    }
    else{
    this.doorParametrs.Measures = "No";
    }
  }
}
