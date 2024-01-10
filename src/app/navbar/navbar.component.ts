import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserProfile } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

    lang: string = '';
    users: UserProfile[] = [];

    constructor(private translateService:TranslateService){}
  ngOnInit(): void {
   this.lang = localStorage.getItem('lang') || 'en';

   
  }

  ChangeLang(lang: any){
    const selectedLanguage = lang.target.value;

    localStorage.setItem('lang', selectedLanguage);

    this.translateService.use(selectedLanguage);
  }



}



