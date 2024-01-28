var mime = require('mime-types')

function file_name_to_mime(name){
    if (name[name.length - 1] == "/") return "inode-directory";
    
    type = mime.lookup(name);
    
    if (type == false) return "inode-vnd.kde.service.unknown";
    else return type.replace('/', '-');
}