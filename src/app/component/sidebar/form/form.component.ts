import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  registerForm: FormGroup;
  FormData: Array <any> = [];
  Data: Array<any> = [
    { name: 'playing', value: 'playing' },
    { name: 'dancing', value: 'dancing' },
    { name: 'racing', value: 'racing' },
    { name: 'singing', value: 'singing' },
    { name: 'eating', value: 'eating' }
  ];

  countryList: Array<any> = [
    { name: 'Germany', state: ['Duesseldorf', 'Eschborn'], },
    { name: 'Spain', state: ['barcelona', 'valencia'] },
    { name: 'USA', state: ['texas', 'alaska'] },
    { name: 'Mexico', state: ['ccc'] },
    { name: 'india', state: ['gujrat', 'rajasthan'] },
  ];

  stateList: Array<any> = [
    { state: 'Duesseldorf', cities: ['Neuss', 'Erkrath'] },
    { state: 'Eschborn', cities: ['Kriftel', 'Kelsterbach'] },
    { state: 'valencia', cities: ['Bocairent', 'Chelva'] },
    { state: 'texas', cities: ['Houston', 'San Antonio'] },
    { state: 'alaska', cities: ['Adak', 'Akhiok'] },
    { state: 'gujrat', cities: ['surat', 'baroda'] },
    { state: 'rajasthan', cities: ['jaipur', 'udaipur'] },
  ];

  cities: Array<any>;
  state: Array<any>;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.FormData = JSON.parse(localStorage.getItem('Data') || '[]')
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      hobby: this.fb.array([])
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.registerForm.get('hobby') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any = FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    this.FormData.push(this.registerForm.value)
    if (this.FormData) {
      localStorage.setItem('Data', JSON.stringify(this.FormData));
      this.registerForm.reset();
    } else {
      this.FormData = JSON.parse(localStorage.getItem('Data') || '[]')
    }
  }

  Delete(i?: any) {
    this.FormData.splice(i, 1);
    localStorage.setItem('Data', JSON.stringify(this.FormData));
  }


  changeCountry(count: any) {
    this.cities = this.countryList.find((con) => con.name == count.target.value).state;
  }

  changeState(count: any) {
    this.state = this.stateList.find((con) => con.state === count.target.value).cities;
  }

  ngOnDestroy() {
    window.localStorage.setItem('myForm', JSON.stringify(this.registerForm.value))
  }

}
