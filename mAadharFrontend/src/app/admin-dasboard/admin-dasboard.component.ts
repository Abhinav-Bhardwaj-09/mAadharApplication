import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css'],
})
export class AdminDasboardComponent implements OnInit {
  newAadharApplications: any = [];

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getNewAadharDetails().subscribe(
      (res) => {
        if (res) {
          this.newAadharApplications = res;
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  approveApplication(applicationId: number): void {
    const approveAadharApplication = { applicationId: applicationId };
    this.adminService
      .approveNewAadharApplication(approveAadharApplication)
      .subscribe(
        (res) => {
          if (res) {
            console.log(res);
            window.location.reload();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
