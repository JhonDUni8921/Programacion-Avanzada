<?php

echo "Ingresa una palabra: ";
$entrada = trim(fgets(STDIN));
$original = strtolower(preg_replace('/[^a-z0-9]/i', '', $entrada));
$reverso = strrev($original);

if ($original === $reverso) {
    echo "La palabra \"$entrada\" es un palíndromo.\n";
} else {
    echo "La palabra \"$entrada\" no es un palíndromo.\n";
}

