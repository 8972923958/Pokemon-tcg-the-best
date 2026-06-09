const btn=document.getElementById('searchBtn');
const input=document.getElementById('searchInput');
const results=document.getElementById('results');

btn.addEventListener('click', async ()=>{
 const q=input.value.trim();
 if(!q) return;

 results.innerHTML='<p>Loading...</p>';

 const res=await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${q}*`);
 const data=await res.json();

 results.innerHTML='';

 data.data.forEach(card=>{
   const div=document.createElement('div');
   div.className='card';
   div.innerHTML=`
   <img src="${card.images.small}" alt="${card.name}">
   <h3>${card.name}</h3>
   <p>${card.set.name}</p>
   `;
   results.appendChild(div);
 });
});
