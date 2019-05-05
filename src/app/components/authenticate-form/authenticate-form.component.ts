import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Token} from '../../shared/models/Token';
import * as jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import Project from '../../shared/models/project';
import project from '../../shared/models/project';

@Component({
  selector: 'app-authenticate-form',
  templateUrl: './authenticate-form.component.html',
  styleUrls: ['./authenticate-form.component.css']
})
export class AuthenticateFormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private http: HttpClient) {

    this.form = this.fb.group({
      wwid: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    console.log('Hello');
    console.log(val);
    if (val.wwid && val.pass) {
      this.authService.login(val.wwid, val.pass)
        .subscribe(
          (token: Token) => {
            console.log('User is logged in');
            const userInfo = jwt_decode(token.token);
            localStorage.setItem('id_token', token.token);
            localStorage.setItem('user_wwid', userInfo.id);
            localStorage.setItem('user_fname', userInfo.fname);
            localStorage.setItem('user_lname', userInfo.lname);
            localStorage.setItem('user_rights', userInfo.userRights);
            localStorage.setItem('user_teamid', userInfo.teamid);
          }
        );
    }
  }

  ngOnInit(): void {
  }

}
