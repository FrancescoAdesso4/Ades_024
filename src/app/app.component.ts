import { Component } from '@angular/core';
import { Team } from './models/team.models';
import { ServiceResponse } from './models/service.response';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';

  teams:Team[]
  ServiceResponse:ServiceResponse
  oServiceResponse:Observable<ServiceResponse>
  serviceURL ="//www.balldontlie.io/api/v1/teams/"

  constructor(public http: HttpClient) {
    this.makeTypedRequest()
  }

  makeTypedRequest() : void{
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.teams = d.data;});
  } 
/*
  sort(){
    this.teams = this.teams.sort((a, b) => a.conference.localeCompare(b.conference) || a.division.localeCompare(b.division));
  }

*/



}
