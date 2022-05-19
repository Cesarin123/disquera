class Disk{
    constructor(id, name, price, year){
        this.id = id;
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

discosLista = [];
// myStorage = window.localStorage;


function nuevoDisco(){

    var nombre = document.getElementById("name").value;
    var precio = document.getElementById("price").value;
    var ano = document.getElementById("year").value;

    if(nombre == "" || precio =="" || ano == ""){
        
        alert("necesitas llenar los parametros necesarios para agregar un nuevo disco");
    
    }else{

        let diskId = discosLista.length;
        var disk = new Disk(diskId,nombre,precio,ano);
        discosLista.push(disk);
        // localStorage.setItem("Lista Discos", discosLista);
        console.log("discosLista", discosLista);
        alert("Tu disco " + disk.name + " ha sido agregado");
        updateTable();

    }
}

function updateTable(){

    var tableDisks = document.getElementById("tableDisks");

    for(let i=0; i<discosLista.length; i++){

        var tableBody = document.getElementById("tableBody");

        var row = document.createElement("tr");
        var columnId = document.createElement("td");
        var columnName = document.createElement("td");
        var columnPrice = document.createElement("td");
        var columnYear = document.createElement("td");
        var textId = document.createTextNode(discosLista[i].id);
        var textName = document.createTextNode(discosLista[i].name);
        var textPrice = document.createTextNode(discosLista[i].price);
        var textYear = document.createTextNode(discosLista[i].year);
        columnName.appendChild(textName);
        columnId.appendChild(textId);
        columnPrice.appendChild(textPrice);
        columnYear.appendChild(textYear);
        row.appendChild(columnId);
        row.appendChild(columnName);
        row.appendChild(columnPrice);
        row.appendChild(columnYear);
        tableBody.appendChild(row);
        tableDisks.appendChild(tableBody);
        
        break;

    }
}