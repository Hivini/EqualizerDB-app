import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-add-members-form',
  templateUrl: './add-members-form.component.html',
  styleUrls: ['./add-members-form.component.css']
})
export class AddMembersFormComponent implements OnInit {
  namesFormGroup: FormGroup;
  passFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  teamFormGroup: FormGroup;
  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.namesFormGroup = this._formBuilder.group({
      namesCtrl: ['', Validators.required]
    });
    this.passFormGroup = this._formBuilder.group({
      passCtrl: ['', Validators.required]
    });
    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required]
    });
    this.teamFormGroup = this._formBuilder.group({
      teamCtrl: ['', Validators.required]
    });
  }

  private done() {
    const name: string[] = this.namesFormGroup.getRawValue().namesCtrl.split(',');
    const password = this.passFormGroup.getRawValue().passCtrl;
    const email = this.emailFormGroup.getRawValue().emailCtrl;
    const team = localStorage.getItem('user_teamid');
    const employeeVals = {
      email,
      password,
      fname: name[1].trim(),
      lname: name[0].trim(),
      eteamid: team
    };
    const httpOptions = {
      params: new HttpParams()
        .set('fieldsVal', JSON.stringify(employeeVals))
    };
    this.http.post('http://localhost:3000/users/register', JSON.stringify(employeeVals), httpOptions)
      .subscribe(data => console.log(data));
  }
}
