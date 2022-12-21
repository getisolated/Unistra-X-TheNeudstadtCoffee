function search(){

    var filtre, table, line, cell, i, text;

    filtre = document.getElementById("search").value.toUpperCase();
    table = document.getElementById("table");
    line = table.getElementsByTagName("tr");

    for (i = 0; i < line.length; i++){

        cell = line[i].getElementsByTagName("td")[0];

        if(cell){
           text = cell.innerText;
        
           if (text.toUpperCase().indexOf(filtre) > -1){
               line[i].style.display = "";
           }
           else{
                line[i].style.display = "none";
           }
        }
    }

}
