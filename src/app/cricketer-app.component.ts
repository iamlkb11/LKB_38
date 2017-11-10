import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CricketerService } from 'app/services/cricketer.service';
import { ICricketList } from './interface/cricketer-list';
import { IPlayerType } from 'app/interface/player-type';
import { CriketerDropDownService } from 'app/services/criketer-drop-down.service';
import { CommonFunction } from "app/common";

declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './cricketer-app.component.html',
  styleUrls: ['./cricketer-app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerService],
})

export class AppComponent implements OnInit {
  /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];

  private searchData: string;
  cricketerModel: ICricketList;
  cricketerDetail: ICricketList;

  // Using constructor, call the cricketService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService) { }

  ngOnInit() {
    this.cricketModel();
    this.playerType = this._cricketerDropDown.getPlayerType();
    this.cricketersArray = this._cricketService.getCricketerList();
  }

  cricketModel() {
    /**Define default values */
    return this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: '',
      yearlyIncome: null,
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a cricket */
  addCriketer(values) {
    // values : {
    //   favShot: ""
    //   firstName: ""
    //   lastName: ""
    //   playerType: "",
    //   yearlyIncome: ""
    // }
    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      playerType: values.playerType,
      yearlyIncome: values.YearlyIncome,
      dob: values.Dob
    };
    // /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    // Using 3rd party library to show message.
    alertify.notify('Cricketer Added Successfully', 'success', 3);
    this._cricketService.getCricketerList();
  };

}
