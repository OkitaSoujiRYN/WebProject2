var newCommandForm = document.forms.newAnimeF; 


function ajouter(){
    //V�rifier que la r�cup�ration se fait bien !)
    console.log(document.forms.newAnimeF.anime.value);

    //cr�ation des variable pour la cr�ation d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const animeTd = document.createElement('td')
    const themeTd = document.createElement('td')
    animeTd.textContent = document.newAnimeF.anime.value
    themeTd.textContent = document.newAnimeF.theme.value
    
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
   //V�rification de la r�cup�ration
    console.log(animeTd.textContent)
    console.log(themeTd.textContent)

    if (!document.newAnimeF.anime.checkValidity() ||
          !document.newAnimeF.theme.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(animeTd, themeTd)

     /* le premier �l�ment dans le document qui contient la classe "datatable" est retourn�*/
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
