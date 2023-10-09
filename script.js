const carrello = [];

function aggiungiAlCarrello(prodotto) {
  carrello.push(prodotto);
  alert(`${prodotto} è stato aggiunto al carrello.`);
}

function confermaOrdine() {
  if (carrello.length === 0) {
    alert('Il carrello è vuoto. Aggiungi prodotti al carrello prima di confermare l\'ordine.');
  } else {
    localStorage.setItem('carrello', JSON.stringify(carrello));
    window.location.href = 'last.html';
  }
}

function vaiallapagina() {
  if (carrello.length === 0) {
    
  } else {
    localStorage.setItem('carrello', JSON.stringify(carrello));
    window.location.href = 'last.html';
  }
}
