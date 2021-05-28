import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  volunteerForm!: FormGroup;

  location: Array<string> = [
    'Downtown', 'S. Bay', 'Lakeside'
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.intializeForm();
  }

  intializeForm(): void {
    this.volunteerForm = this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([this.fb.control('')])
    });
  }

  public onSubmit(): void {
    console.log(this.volunteerForm);
  }

  public addEmail(): void {
    this.references.push(this.fb.control(''))
  }

  public removeEmail(index: number): void {
      this.references.removeAt(index);
  }

  public selectLocation(event: any): void {
    this.volunteerForm.patchValue({
      preferredLocation: event.target.value
    });

  }

  get references(): FormArray {
    return this.volunteerForm.get('references') as FormArray;
  }
}
