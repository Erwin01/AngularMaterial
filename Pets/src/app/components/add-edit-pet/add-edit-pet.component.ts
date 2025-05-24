import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../../interfaces/pet';

@Component({
  selector: 'app-add-edit-pet',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-edit-pet.component.html',
  styleUrl: './add-edit-pet.component.css'
})
export class AddEditPetComponent {

  loading: boolean = false;
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      colorcast: ['', Validators.required],
      color: ['', Validators.required],
      age: ['', Validators.required],
      weigth: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  addPet() {

    // const name = this.form.get('name')?.value;
    const name = this.form.value.name;

    // Object
    const pet: Pet = {
      name: this.form.value.name,
      colorcast: this.form.value.colorcast,
      color: this.form.value.color,
      age: this.form.value.age,
      weigth: this.form.value.age
    }

    console.log(pet)

  }

}
