function menuShow() {
document.getElementById('sidebar').classList.toggle('active');
}
function passToggle(){
if(document.getElementById('password').type==='password'){
    document.getElementById('password').type='text';
    document.getElementById('password-eye').classList.add('fa-eye')
    document.getElementById('password-eye').classList.remove('fa-eye-slash')
}else{
    document.getElementById('password').type='password'
    document.getElementById('password-eye').classList.add('fa-eye}-slash')
    document.getElementById('password-eye').classList.remove('fa-eye')
}
}
