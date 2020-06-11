let val1 = null;
let operacion = null;
let val2 = null;
let resultado = null;
function insert(num){
    document.form.screen.value = document.form.screen.value + num
}
function operation(ope){
    val1 = document.form.screen.value;
    console.log(val1);
    operacion = ope;
    console.log(ope);
    document.form.miniscreen.value = val1 + operacion
    document.form.screen.value = "";
}
function equal(){
    val2 = document.form.screen.value;
    document.form.miniscreen.value = val1 + operacion + val2
    resultado = eval(val1 + operacion + val2);
    document.form.screen.value = resultado;
}
function clean(){
    document.form.screen.value = "";
    document.form.miniscreen.value = "";
    val1 = null;
    val2 = null;
}