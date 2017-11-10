import { ICricketList } from './../interface/cricketer-list';
import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cricketers-list',
  templateUrl: './cricketers-list.component.html',
  styleUrls: ['./cricketers-list.component.css']
})
export class CricketerComponent implements OnInit{

  /**Get the cricketerDetail from cricketer-app  */
  @Input() criketerDetail: ICricketList[];

  private searchData: string;

  private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';

  ngOnInit() {
    this.searchData = '';
  };

}
