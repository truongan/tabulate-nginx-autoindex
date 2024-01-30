import mime from 'mime';

export function file_name_to_mime(name){
    if (name[name.length - 1] == "/") return "inode-directory";
    
    var type = mime.getType(name);
    
    if (type == null) return "inode-vnd.kde.service.unknown";
    else return type.replace('/', '-');
}