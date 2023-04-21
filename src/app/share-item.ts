import { SHARE_HOST } from '../services';

interface ShareItem {
    rowid: string;
    name: string;
    ext: string;
    mime: string;
    size: number;
    rank: number;
    meta: any;
}

interface ShareList {
    listname: string;
    items: ShareItem[];
}

interface FileItem {
    name: string;
    extname: string;
    mime: string;
    total: number;
    loaded: number;
    status: string;
    data: string;
}

interface Echo{
    "ret": boolean;
    "echo": string;
}  

const mimes  = new Map<string, string>();

mimes.set("txt", "/woo/common/mime/text.svg");
mimes.set("js", "/woo/common/mime/text.svg");
mimes.set("css", "/woo/common/mime/text.svg");
mimes.set("htm", "/woo/common/mime/text.svg");
mimes.set("html", "/woo/common/mime/text.svg");
mimes.set("json", "/woo/common/mime/text.svg");
mimes.set("exe", "/woo/common/mime/exe.svg");
mimes.set("com", "/woo/common/mime/exe.svg");
mimes.set("dll", "/woo/common/mime/exe.svg");
mimes.set("ts", "/woo/common/mime/exe.svg");
mimes.set("vue", "/woo/common/mime/exe.svg");
mimes.set("bin", "/woo/common/mime/exe.svg");
mimes.set("dat", "/woo/common/mime/exe.svg");
mimes.set("jpg", "/woo/common/mime/ima.svg");
mimes.set("jpeg", "/woo/common/mime/ima.svg");
mimes.set("png", "/woo/common/mime/ima.svg");
mimes.set("gif", "/woo/common/mime/ima.svg");
mimes.set("bmp", "/woo/common/mime/ima.svg");
mimes.set("svg", "/woo/common/mime/ima.svg");
mimes.set("webp", "/woo/common/mime/ima.svg");
mimes.set("ico", "/woo/common/mime/ima.svg");
mimes.set("mp3", "/woo/common/mime/audio.svg");
mimes.set("m4a", "/woo/common/mime/audio.svg");
mimes.set("wav", "/woo/common/mime/audio.svg");
mimes.set("ogg", "/woo/common/mime/audio.svg");
mimes.set("mid", "/woo/common/mime/audio.svg");
mimes.set("wma", "/woo/common/mime/audio.svg");
mimes.set("flac", "/woo/common/mime/audio.svg");
mimes.set("mp4", "/woo/common/mime/video.svg");
mimes.set("mov", "/woo/common/mime/video.svg");
mimes.set("flv", "/woo/common/mime/video.svg");
mimes.set("wmv", "/woo/common/mime/video.svg");
mimes.set("webm", "/woo/common/mime/video.svg");
mimes.set("zip", "/woo/common/mime/zip.svg");
mimes.set("rar", "/woo/common/mime/zip.svg");
mimes.set("7z", "/woo/common/mime/zip.svg");
mimes.set("md", "/woo/common/mime/md.svg");
mimes.set("pdf", "/woo/common/mime/pdf.svg");
mimes.set("doc", "/woo/common/mime/doc.svg");
mimes.set("docx", "/woo/common/mime/doc.svg");
mimes.set("ppt", "/woo/common/mime/ppt.svg");
mimes.set("pptx", "/woo/common/mime/ppt.svg");
mimes.set("xls", "/woo/common/mime/xls.svg");
mimes.set("xlsx", "/woo/common/mime/xls.svg");

let ShowIcon = (ext: string, id: string):string =>{
    if(id && ("jpg,jpeg,png,gif,bmp".indexOf(ext)>-1) ){
      return  SHARE_HOST + "/share/thumbnail.do?rowid="  + id; 
    }
    return SHARE_HOST + (mimes.get(ext)|| "/woo/common/mime/unknown.svg");
}

export { ShareItem, ShareList, FileItem, ShowIcon, Echo }