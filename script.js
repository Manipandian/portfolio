


// To get active navigation bar color
// let mainMenu = document.getElementById('main-menu');
// mainMenu.addEventListener('click', (e) => {
//     if(e.target.nodeName === 'A') {
//         let previousSelection = document.getElementsByClassName('activeNavElement');
//         previousSelection[0].classList.remove('activeNavElement');
//         console.log(e.target.nodeName);
//         e.target.classList.add('activeNavElement');
//     }
// })

// To make writing animation for role and designation

var typeText = function(contents, element, period) {
    this.contents = contents;
    this.element = element;
    this.indexLoop = 0;
    this.period = period;
    this.txt = '';
    this.isDeleting = false;
    this.typingText();
}

typeText.prototype.typingText = function() {
    let index = this.indexLoop % this.contents.length;
    let fullTxt = this.contents[index];
    let delta = 200 - (Math.random() * 100);
    let thisRef = this;
    if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        delta /= 2;
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.element.textContent = " " + this.txt;

    if(!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        delta = 500;
        this.indexLoop++;
    }
    
    setTimeout(function() {
        thisRef.typingText();
    }, delta);

}


window.addEventListener('load', () => {
    let roleParent = document.getElementsByClassName('role-Write')[0];
    let typeContent = ["I'm a Web Developer.", "I'm a Front End Engineer.", "I love problem solving", "I'm a Proud Indian."];
    new typeText(typeContent, roleParent, 2000);
})

