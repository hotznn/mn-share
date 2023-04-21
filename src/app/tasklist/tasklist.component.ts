import { Component, Input } from '@angular/core';
import {  FileItem, ShowIcon } from '../share-item';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  @Input() items: FileItem[] = [];
  showicon(ext: string, id: string):string{
    return ShowIcon(ext, id);
  }
  percent(item: FileItem): string {
    return Math.floor(((item.loaded/item.total))*100) + '%'
  }
}
