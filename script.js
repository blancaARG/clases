var usuarioregistrado="user";
var contraseñaregistrada="123";

var usuarioingresado=prompt("INGRESE USUARIO");
var contraseñaingresada=prompt("INGRESAR CONTRASEÑA");

if(usuarioingresado==usuarioregistrado&&contraseñaingresada==contraseñaregistrada)
{
    alert("ACCESO CORRECTO");
}
else{
    alert("ACCESO DENEGADO");
}