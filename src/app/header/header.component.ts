import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public fetchApiData: UserRegistrationService,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialogModule
  ) {}

  ngOnInit(): void {}

  toMovies(): void {
    this.router.navigate(['movies']);
  }

  toProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * function to log out user and clear localStorage
   * @function logOut
   * additional reroute to login page
   */
  logOut(): void {
    localStorage.clear();
    this.snackBar.open('You have been successfully logged out', 'Ok', {
      duration: 2000,
    });
    this.router.navigate(['login']);
  }
}