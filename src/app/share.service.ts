import { Injectable } from '@angular/core';
import { Share, SHARE_HOST } from "../services";
import { ShareItem, ShareList, FileItem, Echo } from './share-item';

@Injectable({
  providedIn: 'root'
})

class ShareService {
  public listname: string = "";
  public items: ShareItem[] = [];
  public tasks: FileItem[] = [];
  constructor() { }
  load(listname: string="share:all") {
    this.listname = listname;
    this.items= [];
    Share.load(listname).then( (o)=>{
      let data = o as ShareList;
      for(let i=0; i< data.items.length; i++){
        let item: ShareItem = data.items[i];
        if(item.rowid!=""){
          this.items.push(item);
        }
      }
      console.log(this.items);
    });
  }
  save(item:FileItem){
    item.status = "等待上传";
    this.tasks.push(item);
    Share.save(item.name, item.mime, item.extname, this.listname, item.data, (evt:any)=>{
      console.log(evt);
      item.loaded = evt.loaded;
      item.total = evt.total;
      item.status = Math.floor((item.loaded/item.total)*100) + '%';
      if(item.loaded === item.total){
        item.status = "等待服务器处理";
      }
    })
    .then((o)=>{
      let rowid = (o as Echo).echo;
      if(rowid){
        item.status = "上传成功";
      }
      else {
        item.status = "上传失败";
      }      
      setTimeout(()=>{
        let idx = this.tasks.indexOf(item);
        if(idx>-1){
          this.tasks.splice(idx, 1);
        }
        this.load(this.listname);  
      },1500);
    });
  }
}

export { SHARE_HOST,  ShareService }