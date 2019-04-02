import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from './core/services/utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doodle-front';

  userListes: any;

  ngOnInit() {
  }

  constructor(private utilisateurService: UtilisateurService) {
    console.log('tot');
    this.utilisateurService.getUtilisateur()
    .subscribe((data) => {
      /!* tslint:disable:no-string-literal*!/
      this.userListes = data;
      console.log(data);
    });
  }
}

