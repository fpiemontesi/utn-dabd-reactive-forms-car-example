import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { urlValidator } from '../validator/url.validator';
import { nameInUseValidator } from '../validator/name-in-use.validator';
import { CarService } from '../car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private carService: CarService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required], [
        nameInUseValidator.createValidator(this.carService)
      ]],
      url: ['', [urlValidator]],
      hasDiscount: [false],
      discount: [],
      pieces: this.fb.array([])
    });

    // this.form.setValue({
    //   name: 'valor inicial',
    //   url: 'http://'
    // });

    // this.form.patchValue({
    //   url: 'http://micarrodeprueba.com'
    // });


    this.form.controls['hasDiscount'].valueChanges.subscribe((value) => {
      if (value) {
        this.form.controls['discount'].addValidators([
          Validators.required, Validators.min(1)
        ]);
      } else {
        this.form.controls['discount'].clearValidators();
        this.form.controls['discount'].setErrors(null);
      }

      this.form.controls['discount'].updateValueAndValidity();
    })
  }

  newPiece() {
    const pieces = this.piecesFormArray;
    pieces.push(this.fb.group({
      name: ['', [Validators.required]],
      weight: [0, [Validators.required]]
    }))
  }

  removePiece(index: number) {
    this.piecesFormArray.removeAt(index);
  }

  get piecesFormArray() {
    return this.form.controls['pieces'] as FormArray;
  }

}
