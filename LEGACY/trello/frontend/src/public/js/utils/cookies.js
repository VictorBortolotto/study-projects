const setCookie = (name, value, expires) => {
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires + ";"
}

const getCookie = (key) => {
    let cookie = document.cookie;
    let cookieKey = key + "=";
    let start = cookie.indexOf(cookieKey);
    
    if (start === -1) return null;

    let pos = start + key.length;
    let last = cookie.indexOf(";", pos);

    let value = "";
    if (last !== -1) {
        value = cookie.substring(pos, last);  
    } else{
        value = cookie.substring(pos);
    }

    value = value.replace("=", "")

    return value
}