const card = document.getElementById('card-container');
const glow = document.getElementById('glow');
const img = document.getElementById('card-image');
const title = document.getElementById('card-title');
const desc = document.getElementById('card-description');
const btn = document.getElementById('card-button');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    // az egérmutató aktuális pozíciója a kártyán belül
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
 
    // kártya középpontja
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // a dőlési szög kiszámítása az aktuális pozíció és a középpont függvényében
});
  
