<?PHP

// tabuadas de 1 a 10 
//pode-se fazer infintas tabuaadas só mudando o valor do while do multiplicador
// exemplo: $multiplicador <=20


$multiplicador = 0;

while ($multiplicador <=9){
    $multiplicador++;
    echo"<br>";
    $num = 0;
while ($num <= 10) {
    $conta = $multiplicador * $num;
    echo "$multiplicador x $num = $conta";
    echo "<br>";
    $num++;
    
}
}

?>