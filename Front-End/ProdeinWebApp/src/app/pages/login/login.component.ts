import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TokenStorageService } from '../../core/services/token-storage.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor( private authService: AuthService, 
               private tokenStorage: TokenStorageService,
               private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {     
     // this.roles = this.tokenStorage.getUser().roles;
     console.log(this.tokenStorage.getToken());
    }
  }

  isLogged = false;
  isLoginFailed = false;
  errorMessage = '';

  form = new FormGroup({
    NombreLogin: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get f(){
    return this.form.controls;
  }
  
  submit(): void{
    console.log(this.form.value);
    this.authService.login(this.form.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.Token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLogged = true;
        console.log(data);
        console.log(data.Token);
       // this.roles = this.tokenStorage.getUser().roles;
        this.nextPage();
      },
      err => {
        this.errorMessage = err.error.Message;
        this.isLoginFailed = true;
        console.log(err);
        window.alert('Ha ocurrido un error. Favor intente mas tarde.' + this.errorMessage);
      }
    );
  }  
  nextPage() {
    this.router.navigateByUrl('/home');
  }
}
