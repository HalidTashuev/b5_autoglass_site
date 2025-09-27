function enterSite(){
  document.getElementById('splash').style.display='none';
  document.getElementById('site').style.display='block';
}
function toggleMenu(){
  const nav = document.querySelector('.nav');
  if(!nav)return;
  nav.style.display=nav.style.display==='flex'?'none':'flex';
}
