import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  constructor(
    public authService: AuthService,
    public router: Router,
    ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public login(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    const data = form.value;
    this.authService.login(data.username, data.password).subscribe({
      complete: () => {
        this.router.navigate(['/']);
      }
    });
  }


}
