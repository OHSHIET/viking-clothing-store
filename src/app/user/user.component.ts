import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../auth/users.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userId?: any;
  user: any;
  sameUser: boolean = false;
  staticUser: boolean = true;
  editForm: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    if(!isNaN(Number(this.userId))){
      this.user = UsersService.users.find(user => user.id === Number(this.userId));
    }
    else {
      let params = new HttpParams()
      .set('id', this.userId)

      this.http.get<any>(`http://localhost:3000/getuser`, {params})
      .subscribe(response => {
        this.user = response.user;
        this.staticUser = false;

        const currentUser = localStorage.getItem('userId');
        if(currentUser === this.userId) {
          this.sameUser = true;

          this.editForm = new FormGroup({
            'surname': new FormControl(''),
            'phone': new FormControl(''),
            'address': new FormControl(''),
            'email': new FormControl('')
          })
        }
      })
    }
  }

  editUser() {

    const editVals = {id: this.userId, surname: this.editForm.value.surname, phone: this.editForm.value.phone, address: this.editForm.value.address, email: this.editForm.value.email}


    this.http.post<any>(`http://localhost:3000/edituser`, editVals)
      .subscribe(response => {
        window.location.reload();
      })
  }
}
