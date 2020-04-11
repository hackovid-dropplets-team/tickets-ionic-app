import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public appService: AppService,
    ) { }

  ngOnInit() {
  }

  public register(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    const data = form.value;
    this.authService.register(data.username, data.password1, data.password2).subscribe({
      complete: () => {
        this.router.navigate(['/']);
        this.authService.getUser().subscribe(user => {
          this.appService.user = user;
        });
      }
    });
  }
}
