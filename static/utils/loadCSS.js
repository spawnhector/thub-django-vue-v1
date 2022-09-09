export function loadCSS(url, implementationCode, location){
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", url)
    fileref.onload = implementationCode;
    fileref.onreadystatechange = implementationCode;
    location.appendChild(fileref);
};