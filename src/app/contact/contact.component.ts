import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	//Adding this property to the tsconfig.json file ("strictPropertyInitialization": false ) enables to bypass the initializer issue.
	//thus we are informing the compiler that messageForm will value in the runtime...instead of compile time..
	constructor(){}

	ngOnInit():void{
		
	}

	// messageForm: FormGroup;
	// submitted = false;
	// success = false;

	// constructor(private formBuilder: FormBuilder) { }

	// ngOnInit() {
	// 	this.messageForm = this.formBuilder.group({
	// 	name: ['', Validators.required],
	// 	message: ['', Validators.required]
	// 	});
	// }

	// onSubmit() {
	// 	this.submitted = true;

	// 	if (this.messageForm.invalid) {
	// 		return;
	// 	}

	// 	this.success = true;
	// }

}
