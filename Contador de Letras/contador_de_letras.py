entrada = input("Escribe una cadena: ")

numeros = 0
mayusculas = 0
minusculas = 0

for caracter in entrada:
    if caracter.isdigit():
        numeros += 1
    elif caracter.isupper():
        mayusculas += 1
    elif caracter.islower():
        minusculas += 1

print("\nResultado del análisis:")
print("Letras mayúsculas:", mayusculas)
print("Letras minúsculas:", minusculas)
print("Números:", numeros)
