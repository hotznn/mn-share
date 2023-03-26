import axios from  "axios";
const SHARE_HOST = "https://www.bimwook.com:11180";
class WebData {
  data: string[] = [];
  add(name:string, value:string){
    this.data.push(name+"=" + window.encodeURIComponent(value));
  };
  build(){
    return this.data.join("&");
  }
}

const web = {
    get: function(url:string) {
        return new Promise((resolve, reject) => {
            axios.get(url).then(o=>{
                resolve(o.data);
            }).catch(err=>{
                reject(err);
            });
        });
    },
    post: function(url:string, data:string, evt:Function) {
        return new Promise((resolve, reject) =>{
            axios.post(url, data, {onUploadProgress(progressEvent) {
                if(typeof evt === 'function'){
                    evt(progressEvent)
                }
            },}).then(o=>{
                resolve(o.data);
            }).catch(err=>{
                reject(err);
            });
        });
    }, 
    data: function(nv: any):WebData {
        let ret = new WebData();
        for(let n in nv){
            ret.add(n, nv[n]);
        }
        return ret;
    }
}
const Share = {
    load(listname: string) {
        let data = web.data({"listname": listname});
        return web.get(SHARE_HOST + "/share/list.do?" + data.build() );
    },
    save(name:string, mime:string, ext:string, listname:string, data:string, evt: Function){
        let d = web.data({"name": name, "mime": mime, "ext-name": ext, "listname": listname, "data": data});
        return web.post(SHARE_HOST + "/share/save.do", d.build(), evt);
    }
}

export { SHARE_HOST,  WebData, Share };