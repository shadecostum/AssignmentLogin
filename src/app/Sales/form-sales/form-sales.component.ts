import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesServiceService } from 'src/app/Service/sales-service.service';

@Component({
  selector: 'app-form-sales',
  templateUrl: './form-sales.component.html',
  styleUrls: ['./form-sales.component.css']
}) 
export class FormSalesComponent implements OnInit {

  constructor(private auth:SalesServiceService){}

  departmentForm =new FormGroup(
    {
      DepartmentName:new FormControl('',Validators.required),
      EmployessCount:new FormControl('',[Validators.required,Validators.min(1)]),
      Address:new FormControl('',Validators.required)
    }
  )

get DepartmentNameValid()
{
  return this.departmentForm.get('DepartmentName')
}
get EmployessCountValid()
{
  return this.departmentForm.get('EmployessCount')
}
get AddressValid()
{
  return this.departmentForm.get('Address')
}

SalesDataArray: any[] = [];


 
ngOnInit(): void {

 this.SalesDataArray= this.auth.getSalesDataDetails()

    
}

generateRandomId(): string {
  return Math.random().toString(36).substring(7);
}

onSubmit(data: any) {
  if (this.departmentForm.valid) {

    const newFormData = {
      DepartmentName: this.departmentForm.get('DepartmentName')!.value,
      EmployessCount: this.departmentForm.get('EmployessCount')!.value,
      Address: this.departmentForm.get('Address')!.value
    };

    const randomId=this.generateRandomId();

    const formIdAddData={id:randomId,...newFormData}

    this.auth.AddSalesDetails(formIdAddData)
   
    this.departmentForm.reset();

this.showTable=true
  }

}
showTable=false
showUpdateForm=false
ShowUpdateFun()
{
this.showUpdateForm=true
}


departmentUpdateForm=new FormGroup(
  {
    id:new FormControl('',Validators.required),
    DepartmentName:new FormControl('',Validators.required),
    EmployessCount:new FormControl('',[Validators.required,Validators.min(1)]),
    Address:new FormControl('',Validators.required)

  }
)


get DepartmentUpdateNameValid()
{
  return this.departmentUpdateForm.get('DepartmentName')
}
get EmployessCountUpdateValid()
{
  return this.departmentUpdateForm.get('EmployessCount')
}
get AddressUpdateValid()
{
  return this.departmentUpdateForm.get('Address')
}




singleDataFetchArray:any=[{}]


selectedData(eventIdPass:any)
{
  console.log(eventIdPass);
  
  this.singleDataFetchArray=this.auth.searchSalesById(eventIdPass.target.value)
  console.log("array",this.singleDataFetchArray);
  
}



availableIds:any
onSubmitUpdateForm()
{

  const UpdateFormData=
  {
    id:this.departmentUpdateForm.get('id')!.value,
    DepartmentName: this.departmentUpdateForm.get('DepartmentName')!.value,
    EmployessCount: this.departmentUpdateForm.get('EmployessCount')!.value,
    Address: this.departmentUpdateForm.get('Address')!.value
  }
  console.log("updated",UpdateFormData);
  this.auth.updateData(UpdateFormData);

  this.departmentUpdateForm.reset();
  this.showUpdateForm=false
}




  openUpdateForm() {
     
    this.showUpdateForm = true;
  }

  closeUpdateForm() {
    this.showUpdateForm = false;
  }


}
