import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';

@Component({
  selector: 'app-patient',
  templateUrl: './add.patient.component.html',
  styleUrls: ['./add.patient.component.sass'],
})
export class PatientComponent implements OnInit {
  model: any = {
    patID: '',
    fName: 'test_name',
    lName: 'test_name',
    phone: '123456789',
    city: 'city',
    state: 'state',
  };

  show: boolean = false;
  msg_text: string = '';
  warn: boolean = false;
  success:boolean = false

  ipfs!: IPFSHTTPClient;

  IPFShash: string = ''


  constructor(private patientService: PatientService) {
    this.ipfs = patientService.ipfs
  }

  // ngOnInit(): void {}
  // constructor(
  //   private pa: PatientService
  // ) {
  //   this.ipfs = pa.ipfs
  // }

  ngOnInit(): void {
    this.ipfs = this.patientService.ipfs
  }


  onSubmit() {
    this.show = true
    this.msg_text = "Adding Patient to the Network..."
    console.log(this.model);
    this.checkAddProgress()
    this.patientService.addPatient(this.model.patID, this.model);
  }

  checkAddProgress(){
    console.log("Checking progress");
    
    let checkProgress = setInterval(() => {
      if(this.patientService.added){
        this.msg_text = "Patient Added to the network"
        this.success = true
        clearInterval(checkProgress)
      }
      if(this.patientService.failed){
        this.warn = true
        this.msg_text = "Patient adding Failed"
        clearInterval(checkProgress)
      }
    },500)
  }
  onClose() {
    this.show = false
    this.warn = false
  }
}


// import { Component, OnInit } from '@angular/core';
// import { PatientService } from '../../services/patient.service';
// import { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';

// @Component({
//   selector: 'app-patient',
//   templateUrl: './add.patient.component.html',
//   styleUrls: ['./add.patient.component.sass'],
// })
// export class PatientComponent implements OnInit {
//   model: any = {
//     patID: '',
//     fName: 'test_name',
//     lName: 'test_name',
//     phone: '123456789',
//     city: 'city',
//     state: 'state',
//     imageHash: '',
//   };

//   show: boolean = false;
//   msg_text: string = '';
//   warn: boolean = false;
//   success:boolean = false

//   ipfs!: IPFSHTTPClient;

//   IPFShash: string = ''

//   // ngOnInit(): void {
//   //   this.ipfs = this.ds.ipfs}
//   constructor(private pa: PatientService) {
//     private pa: PatientService
//   ) {
//     this.ipfs = pa.ipfs
//   }

//   ngOnInit(): void {
//     this.ipfs = this.pa.ipfs
//   }

//   onSubmit() {
//     this.show = true
//     this.msg_text = "Adding Patient to the Network..."
    
//     this.checkAddProgress()
//     this.pa.addPatient(this.model.patID, this.model);
//   }

//   checkAddProgress(){
//     console.log("Checking progress");
    
//     let checkProgress = setInterval(() => {
//       if(this.pa.added){
//         this.msg_text = "Patient Added to the network"
//         this.success = true
//         clearInterval(checkProgress)
//       }
//       if(this.pa.failed){
//         this.warn = true
//         this.msg_text = "Patient adding Failed"
//         clearInterval(checkProgress)
//       }
//     },500)
//   }

//   onClose() {
//     this.show = false
//     this.warn = false
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { PatientService } from '../../services/patient.service';
// import { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types'


// @Component({
//   selector: 'doctor-add',
//   templateUrl: './add.patient.component.html',
//   styleUrls: ['./add.patient.component.sass'],
// })
// @Component({
//   selector: 'app-patient',
//   templateUrl: './add.patient.component.html',
//   styleUrls: ['./add.patient.component.sass'],
// })
// export class AddPatientComponent implements OnInit {
//   model: any = {
//     patID: '',
//     fName: 'test_name',
//     lName: 'test_name',
//     phone: '123456789',
//     city: 'city',
//     state: 'state',
//     imageHash: '',
//   };
//   image_url: any;
//   imageCompressedUrl: string = '';

//   show: boolean = false;
//   msg_text: string = '';
//   warn: boolean = false;
//   success: boolean = false

//   ipfs: IPFSHTTPClient;

//   IPFShash: string = ''

//   constructor(
//     private pa: PatientService
//   ) {
//     this.ipfs = pa.ipfs
//   }

//   ngOnInit(): void {
//     this.ipfs = this.pa.ipfs
//   }

//   onAddDocSubmit() {
//     this.show = true;
//     this.msg_text = "Adding Patient to the Network...";
//     this.warn = false;

//     this.model.imageHash = this.image_url;

//     let data = this.model;

//     this.pa.addPatient(this.model.docID, data).then((r: any) => {
//       this.success = true
//       this.msg_text = 'Data added to IPFS...';
//       this.msg_text += '<br>User Added to the Blockchain';
//       console.log('User added Successfully');

//       this.model = {}

//     }).catch((er: any) => {
//       this.warn = true
//       this.msg_text =
//         'Adding Doctor Failed<br> <small class="fw-light text-danger"><b>"</b>' +
//         this.model.docID +
//         '<b>"</b></small><br>1.not a valid address or <br>2.Already have a role';
//       console.log(er);
//     })
//   }


//   PreviewImage(event: any) {
//     if (event.target.files && event.target.files[0]) {
//       var reader = new FileReader();
//       reader.onload = (event: any) => {
//         this.image_url = event.target.result;
//         // this.compressImage();
//         console.log(this.image_url);

//       };
//       reader.readAsDataURL(event.target.files[0]);
//     }
//   }

//   onClose() {
//     this.show = false;
//     this.warn = false;
//   }
// }
