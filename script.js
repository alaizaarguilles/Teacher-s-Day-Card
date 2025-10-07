const photoInput=document.getElementById('photoInput');
const teacherPhoto=document.getElementById('teacherPhoto');
const resetPhoto=document.getElementById('resetPhoto');
const messageText=document.getElementById('messageText');
const copyBtn=document.getElementById('copyBtn');
const printBtn=document.getElementById('printBtn');
const changeNameBtn=document.getElementById('changeNameBtn');
const displayName=document.getElementById('displayName');


const defaultSVG=teacherPhoto.src;


photoInput.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=ev=>{teacherPhoto.src=ev.target.result;};reader.readAsDataURL(file);});
resetPhoto.addEventListener('click',()=>{teacherPhoto.src=defaultSVG;photoInput.value='';});
copyBtn.addEventListener('click',async()=>{try{const text=messageText.innerText;await navigator.clipboard.writeText(text);copyBtn.textContent='Copied!';setTimeout(()=>copyBtn.textContent='Copy Message',1400);}catch(e){copyBtn.textContent='Copy failed';setTimeout(()=>copyBtn.textContent='Copy Message',1400);}});
printBtn.addEventListener('click',()=>{window.print();});
changeNameBtn.addEventListener('click',()=>{const name=prompt('Enter recipient name:',displayName.textContent)||displayName.textContent;displayName.textContent=name.trim()||'Sir Randy';const inner=messageText.innerHTML;messageText.innerHTML=inner.replace(/Sir Randy/g,name);});
messageText.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();document.execCommand('insertText',false,'\t');}});