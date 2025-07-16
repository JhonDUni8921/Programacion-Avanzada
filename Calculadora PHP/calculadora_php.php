<?php

if (strncasecmp(PHP_OS, 'WIN', 3) !== 0) {
    system('clear');
} else {
    system('cls');
}

echo "=== Mini Calculadora en PHP (Consola) ===\n";

echo "Ingrese el primer número: ";
$num1 = trim(fgets(STDIN));

echo "Ingrese el operador (+, -, *, /): ";
$operador = trim(fgets(STDIN));

echo "Ingrese el segundo número: ";
$num2 = trim(fgets(STDIN));

$num1 = (float)$num1;
$num2 = (float)$num2;

switch ($operador) {
    case '+':
        $resultado = $num1 + $num2;
        break;
    case '-':
        $resultado = $num1 - $num2;
        break;
    case '*':
        $resultado = $num1 * $num2;
        break;
    case '/':
        if ($num2 == 0) {
            echo "❌ Error: No se puede dividir por cero.\n";
            exit;
        }
        $resultado = $num1 / $num2;
        break;
    default:
        echo "❌ Error: Operador no válido.\n";
        exit;
}

echo "✅ Resultado: $num1 $operador $num2 = $resultado\n";
