import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShareItem, ShowIcon } from '../share-item';


@Component({
    selector: 'app-listview',
    templateUrl: './listview.component.html',
    styleUrls: ['./listview.component.css']
})

export class ListviewComponent {
    @Input() items: ShareItem[] = [];
    @Output() itemclick:EventEmitter<ShareItem> = new EventEmitter<ShareItem>();


    onitemclick(item: ShareItem){
      this.itemclick.emit(item);
      console.log(item);
    }

    showicon(ext: string, id: string):string{
      return ShowIcon(ext, id);
    }

    showsize(size:number):string{
      let units = ["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];
      if(!size){
          return "0 KB";
      }
      let s = (size);
      let idx = Math.floor(Math.log(s)/Math.log(1024));
      let v = (s/Math.pow(1024,idx)).toFixed(2);
      return v + ' ' + units[idx];
    }
}
