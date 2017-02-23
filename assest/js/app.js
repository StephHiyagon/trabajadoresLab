var arr= [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
{nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

  var resultado="";
function imprimirTodo(){
  for(var caract in arr){
    resultado += "<li> Nombre: " + arr[caract].nombre + "<br>" +
                  "<li> Apellido: " + arr[caract].apellido + "<br>" +
                  "<li> Rol: " + arr[caract].rol + "<br>" +
                  "<li> Cumpleaños: " + arr[caract].cumpleanios + "<br>" + "<br>";
  }
  document.getElementById("imprimir").innerHTML= resultado;
  }
