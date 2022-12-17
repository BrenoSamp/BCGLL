import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: Employee[];
  EmployeeProfile: any = ['Codigo', 'Nome', 'creditos'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      codigo: ['', [Validators.required]],
      nome: [
        '',
        [
          Validators.required
        ],
      ],
      creditos: ['', [Validators.required]],
    });
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getEmployee(id) {
    this.apiService.getEmployee(id).subscribe((data) => {
      console.log(data)
      this.editForm.setValue({
        codigo: data['codigo'],
        nome: data['nome'],
        creditos: data['creditos'],
      });
    });
  }
  updateEmployee() {
    this.editForm = this.fb.group({
      codigo: ['', [Validators.required]],
      nome: [
        '',
        [
          Validators.required,
        ],
      ],
      creditos: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/employees-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}