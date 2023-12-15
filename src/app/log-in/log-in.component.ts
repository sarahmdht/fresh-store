import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
login =  new FormGroup ({
  email: new FormControl(''),
  password: new FormControl('')
})
onSubmit(){
  console.log(this.login.value);
}

}
