import { Component, ElementRef, VERSION, Renderer2, ViewChild, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import '../../assets/app.css';


@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'upload.component.html'
})

export class UploadComponent implements OnInit {
    uniqueCode: string;
    name : string;
    message: string;
   

    ngOnInit(){
    }
    @ViewChild('fileInput') el:ElementRef;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private rd: Renderer2) {
        this.name = `Angular v${VERSION.full} : File Upload`
      }
      
      fileUpload() {
        console.log(this.uniqueCode);
        this.message = "File uploaded is :"+this.el.nativeElement.files[0].name;
        console.log(this.message);
      }

      backToLogin(){
          console.log('test back login');
        this.router.navigate(['login']);
      }
   
}
