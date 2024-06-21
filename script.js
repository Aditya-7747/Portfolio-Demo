let menuIcon = document.querySelector('#menu-icon');
let navbar = doucument.querySelector('.navbar');
let sections = doucument.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset =  sec.offsettop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(id);

        if(top >= offset && top < offset + height){
          navlinks.forEach(link => {
            links.classlist.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classlist.add('active')
          }) 
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classlist.toggle('active');

}
