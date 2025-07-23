numeros = input("Ingresa numeros separados por espacio: ")
array = [int(n) for n in numeros.split()]
suma = sum(array)
print("La suma es:", suma)