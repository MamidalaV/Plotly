d3.selectAll("body").on("change",updatePage);

function updatePage(){
    dropdownMenu = d3.selectAll("#selectOption").node(); //node is eqivalent to property.value
    selectedID = dropdownMenu.id;
    selectedOption = dropdownMenu.value;

    console.log(selectedOption)
}