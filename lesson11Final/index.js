//hamberger//

const ham = document.querySelector('.ham');
const navigation = document.querySelector('.navigation')
function menu(){
    navigation.classList.toggle('responsive');
    ham.classList.toggle('responsive');
}
ham.addEventListener('click', menu,false);
