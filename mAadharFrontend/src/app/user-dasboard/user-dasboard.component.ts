import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-dasboard',
  templateUrl: './user-dasboard.component.html',
  styleUrls: ['./user-dasboard.component.css'],
})
export class UserDasboardComponent implements OnInit {
  data = { citizenId: localStorage.getItem('citizenId') };
  user: any;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (!this.data.citizenId) {
      this.router.navigate(['AadharApp/citizens/logIn']);
      return;
    } else {
      this.authService.getUserDetails(this.data).subscribe(
        (res) => {
          if (res) {
            this.user = res[0];
            console.log(res);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}

// '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$';
