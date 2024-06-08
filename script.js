
const nav = document.querySelector('nav');


nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
 
    const target = document.querySelector(e.target.hash);
  
    target.scrollIntoView();
 
    target.classList.add('active');
  
    document.querySelectorAll('section').forEach((section) => {
      if (section !== target) {
        section.classList.remove('active');
      }
    });
  }
});


const skillsList = document.querySelector('.skills ul');


skillsList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
  
    const target = e.target.textContent.trim();
    
    e.target.classList.add('active');
   
    skillsList.querySelectorAll('li').forEach((skill) => {
      if (skill.textContent.trim() !== target) {
        skill.classList.remove('active');
      }
    });
  }
});