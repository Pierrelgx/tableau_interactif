// Liste des activités
//===============
const activites = [
    { titre: "Patchwork",  prix: 25 }, // 0
    { titre: "Peinture",  prix: 35 }, // 1
    { titre: "Encadrement",  prix: 22 }, // 2
    { titre: "Gymnastique",   prix: 17 }, // 3
    { titre: "Photographie",  prix: 45 }, // 4
    { titre: "Emaux",  prix: 30 }, // 5
    { titre: "Création textile",  prix: 30 }, // 6
    { titre: "Roller",  prix: 58 }, // 7
    { titre: "Généalogie",  prix: 15 }, // 8
    { titre: "Scrapbooking",  prix: 20 }, // 9
    { titre: "Frais d'adhésions", prix: 35 }  // 10
  ];

  function initTableau() {
  
    const tbody = document.querySelector( '#table-facture' ).querySelector( 'tbody');
  
    for ( let i = 0; i < activites.length; i++ )
    {
      const ligne = tbody.insertRow();
  
      // cellules activitÃ©s
      let cellActivite = ligne.insertCell();
      cellActivite.innerHTML = activites[ i ].titre;
  
      // cellules cotisations
      let cellCotisation = ligne.insertCell();
      cellCotisation.innerHTML = activites[ i ].prix;
  
      // cellules choix
      let cellChoix = ligne.insertCell();
  
      // cellules tarifs
      cellTarif = ligne.insertCell();
      cellTarif.innerHTML = 0;
    } 
  }
  

  let cellChoix = ligne.insertCell();
  if ( i === activites.length -1 )
  {
    // dernière ligne, les frais sont obligatoires (frais d'adhésions)
    cellChoix.innerHTML = '<input type="checkbox" disabled checked />';
  }
  else
  {
    cellChoix.innerHTML = '<input type="checkbox" />';
  }
  