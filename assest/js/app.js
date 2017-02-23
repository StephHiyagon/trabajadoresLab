var arr= [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
{nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

  var resultado="";
function imprimirTodo(){
  for(var c in arr){
    resultado += "<li> Nombre: " + arr[c].nombre + "<br>" +
                  "<li> Apellido: " + arr[c].apellido + "<br>" +
                  "<li> Rol: " + arr[c].rol + "<br>" +
                  "<li> Cumpleaños: " + arr[c].cumpleanios + "<br>" + "<br>";
  }
  document.getElementById("imprimir").innerHTML= resultado;
  }
