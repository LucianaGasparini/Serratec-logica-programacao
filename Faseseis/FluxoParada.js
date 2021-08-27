

for (var i = 0; i < 10; i++){
    console.log("o valor de i " + i);
    if (i == 5) {
        //i = 10;
        
    break;

    }

}
console.log("fora do laço");

//continue
for (var i = 0; i < 10; i++){
console.log(i)

    if (i==5){
        console.log("cheguei na metade");
        continue;
            }
    console.log ('Estamos no valor de i; '+ i)
}



for (var i = 0; i < 10; i++){
    console.log("i: " + i);
        for (var j = 1; j < 10; j++){
            var mult = i * j 
            console.log("mult: "+ mult)

            if (mult % 3 == 0)
            break;
        }
    
        console.log("fim do i "  + i);
    }