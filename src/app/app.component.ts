import { Component } from '@angular/core';
import { ShareItem, FileItem } from './share-item';

import { SHARE_HOST, ShareService } from './share.service';

let code = "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mn-share';
  share: ShareService = new ShareService();
  constructor() {
    code = (window.location.search.match(/\?code=([^&]+)/)||["", "all"])[1];
    this.share.load(`share:${code}`);
  }
  showitem(item: ShareItem){
    window.open(SHARE_HOST + "/share/view/" + item.rowid + "." + item.ext);
  }
  reload(){
    this.share.load(`share:${code}`);
  }
  select(){
    let me = this;
    let f = document.createElement("input");
    f.setAttribute('type',"file");
    f.setAttribute('name',"file");
    f.setAttribute('multiple',"multiple");
    f.onchange = function(){
      if(f.files==null){
        return;
      }
      for(let i=0; i<f.files.length; i++){
        let doc = f.files[i];
        ((doc)=>{
          let reader = new FileReader();
          let extname = ((doc.name||"").match(/\.([^.]+)$/)||["","txt"])[1];
          let item:FileItem = {
            name: doc.name.replace("." + extname, ""),
            extname: extname,
            mime: doc.type,
            total: doc.size,
            loaded: 0,
            status: "等待上传",
            data: ""
          };
          reader.onloadend = (e)=> {
            let data = (e.target||{result:""}).result as string;
            let p = (data||"").indexOf(",");
            if(p>-1){
              item.data = data.slice(p+1);
            }
            me.share.save(item);
          }
          reader.readAsDataURL(doc);
        })(doc);
      }
    };
    f.click();
  }
}
