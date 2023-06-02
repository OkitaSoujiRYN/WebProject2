var newCommandForm = document.forms.newAnimeF; 


function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newAnimeF.anime.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const animeTd = document.createElement('td')
    const themeTd = document.createElement('td')
    animeTd.textContent = document.newAnimeF.anime.value
    themeTd.textContent = document.newAnimeF.theme.value
    
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
   //Vérification de la récupération
    console.log(animeTd.textContent)
    console.log(themeTd.textContent)

    if (!document.newAnimeF.anime.checkValidity() ||
          !document.newAnimeF.theme.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(animeTd, themeTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)

}

 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}
