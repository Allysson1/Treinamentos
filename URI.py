#1000

# print("Hello World!")


# 1001

# A = int(input())
# B = int(input())
# X = A + B
# print("X =",X)


# 1002

# raio = float(input())
# area =(raio*raio) * 3.14159 
# print("A=%0.4f"% area)


# 1003

# A = int(input())
# B = int(input())

# SOMA =A + B


# print("SOMA =",SOMA)


# 1004

# numero1 = int(input())
# numero2 = int(input())

# PROD = numero1 * numero2
# #para mostrae uma variavel

# print("PROD =",PROD)



#1005

# A =float(input())
# B =float(input())
# if A <=10.0 and B <=10.0:
#     am = A*3.5
#     bm = B*7.5
#     media  = (am + bm)/11 
#     print("MEDIA = %.5f"% media)



#1006
# A =float(input())
# B =float(input())
# C =float(input())
# if A <=10.0 and B <=10.0 and C <=10.0:
#     Am = A*0.2
#     Bm = B*0.3
#     Cm = C*0.5
#     media  = Am+Bm+Cm
#     print("MEDIA = %.1f"% media)




#1007

# A =int(input())
# B =int(input())
# C =int(input())
# D =int(input())

# DIFERENCA = (A * B - C * D)

# print("DIFERENÇA =", DIFERENCA)





#1008

# numero = int(input())
# valor_hora = int(input())
# horas = float(input())

# salario = valor_hora * horas 

# print("NUMBER =", numero)
# print("SALARY = U$ %.2f"% salario)



#1009

# nome = input()
# salario = float(input())
# vendas = float(input())
# comissao = vendas * 0.15
# salariof = salario + comissao 
# print(TOTAL = R$ %.2f"% salariof)


#1040

# x= input().split()
# N1,N2,N3,N4 = x

# N1 =float(N1)
# N2 =float(N2)
# N3 =float(N3)
# N4 =float(N4)

# media=float((N1*2 + N2*3 + N3*4 + N4*1)/10)

# print("Media: %.1f"% media)

# if media >=7.0:
#     print("Aluno aprovado.")

# elif media <5.0:
#    print("Aluno reprovado.") 

# elif media >=5.0 and  media <=6.9:
#     print("Aluno em exame.")

# EXAME= float(input())

# print("Nota do exame: %.1f"% EXAME)
# media = float((media + EXAME) /2) 

# if media >=5.0:
#     print("Aluno aprovado.")
#     print("Media final: %.1f"% media)

# if media <=4.9:
#     print("Aluno aprovado.")
#     print("Media final: %.1f"% media)

# #outra maneira 1040

# N1,N2,N3,N4 = input().split()

# N1 =float(N1)
# N2 =float(N2)
# N3 =float(N3)
# N4 =float(N4)

# media=((N1*0.2) + (N2*0.3) + (N3*0.4) + (N4*0.1))

# print("Media: %.1f"% media)

# if media >=7.0:
#     print("Aluno aprovado.")

# elif media <5.0:
#    print("Aluno reprovado.") 

# if media >=5.0 and  media <=6.9:
#     print("Aluno em exame.")

# ne=input().split()

# ne=float(ne)

# print("Nota do exame: %.1f"% ne)
# mediae = media + ne   
# mediaf = mediae/2

# if mediaf >=5.0:
#     print("Aluno aprovado.")
#     print("Media final: %.1f"% mediaf)

# elif mediaf <=4.9:
#     print("Aluno aprovado.")
#     print("Media final: %.1f"% mediaf)

#outra maneira 1040

# N1,N2,N3,N4 = input().split()
# N1 =float(N1)
# N2 =float(N2)
# N3 =float(N3)
# N4 =float(N4)
# media=float((N1*2 + N2*3 + N3*4 + N4*1)/10)
# print("Media: %.1f"% media)
# if media >=7.0:
#     print("Aluno aprovado.")
# elif media <5.0:
#     print("Aluno reprovado.")
# elif media >=5.0 and media <6.9:
#     print("Aluno em exame.")
#     ne=input()
#     ne=float(ne)
#     print("Nota do exame: %.1f"% ne)
#     mediae = media + ne
#     mediaf = mediae/2
#     if mediaf >=5.0:
#         print("Aluno aprovado.")
#         print("Media final: %.1f"% mediaf)
#     elif mediaf <=4.9:
#         print("Aluno aprovado.")
#         print("Media final: %.1f"% mediaf)




#1041

# x,y = input().split()

# x = float(x)
# y = float(y)

# if x == y == 0:
#             print("Origem")

# if x == 0 and y > 0:
#             print("Eixo y")

# if x == 0 and y <0:
#             print("Eixo y")    

# if y == 0 and x > 0 :
#             print("Eixo X")

# if y == 0 and x  < 0 :
#             print("Eixo X")

# if x > 0 and y > 0:
#             print("Q1")

# if x > 0 and y < 0:
#             print("Q4")

# if y > 0 and x < 0:
#             print("Q2")

# if x < 0 and y < 0:
#             print("Q3")
   



#1059

# for x in range(1,101):
#     if x%2 == 0:
#         print(x)



#1078

# N = int(input())

# print("1 *",N," = " ,1*N)
# print("2 *",N," = " ,2*N)
# print("3 *",N," = " ,3*N)
# print("4 *",N," = " ,4*N)
# print("5 *",N," = " ,5*N)
# print("6 *",N," = " ,6*N)
# print("7 *",N," = " ,7*N)
# print("8 *",N," = " ,8*N)
# print("9 *",N," = " ,9*N)
# print("10 *",N," = " ,10*N)


#T2
# N = int(input())

# t=1
# while t<=9:
#         t+=1
#         print(t,"*",N," = " ,t*N)



#T3
# N = int(input()) 
# for t in range(1, 11): 
#     print(t,"x",N,"=" ,t*N)




#1043


# A = float(input())
# B = float(input())
# C = float(input())


# if A+B>C and A+C>B and C+B>A:

#         perimetro = A+B+C
#         print("Perimetro =",perimetro)

# else:
#         base= A+B
#         conta = base * C
#         area = conta/2
#         print("Area =",area)



#1044
# A,B=input().split()
# A = int(A)
# B = int(B)

# M = A+B

# if M%2!=0:
#         print("Nao sao Multiplos")

# else:
#         print("Sao Multiplos")




#1048
 
# salario = float(input())

# if salario <= 400.00:
#         reajuste = salario * 0.15
#         nsalario = reajuste + salario

#         print("Novo salario: %.2f"% nsalario)
#         print("Reajuste ganho: %.2f"% reajuste)
#         print("Em percentual: 15 %")

# if salario >= 400.01 and salario <= 800.00:
#         reajuste = salario * 0.12
#         nsalario = reajuste + salario

#         print("Novo salario: %.2f"% nsalario)
#         print("Reajuste ganho: %.2f"% reajuste)
#         print("Em percentual: 12 %")

# if salario >= 800.01 and salario <= 1200.00:
#         reajuste = salario * 0.10
#         nsalario = reajuste + salario

#         print("Novo salario: %.2f"% nsalario)
#         print("Reajuste ganho: %.2f"% reajuste)
#         print("Em percentual: 10 %")

# if salario >= 1200.01 and salario <= 2000.00:
#         reajuste = salario * 0.7
#         nsalario = reajuste + salario

#         print("Novo salario: %.2f"% nsalario)
#         print("Reajuste ganho: %.2f"% reajuste)
#         print("Em percentual: 7 %")

# if salario > 2000.00:
#         reajuste = salario * 0.4
#         nsalario = reajuste + salario

#         print("Novo salario: %.2f"% nsalario)
#         print("Reajuste ganho: %.2f"% reajuste)
#         print("Em percentual: 4 %")





#1060

# n1 =float(input())
# n2 =float(input())
# n3 =float(input())
# n4 =float(input())
# n5 =float(input())
# n6 =float(input())

# total = 0
# if n1 >0:
#         total = total + 1

# if n2 >0:
#         total = total + 1

# if n3 >0:
#         total = total + 1

# if n4 >0:
#         total = total + 1

# if n5 >0:
#         total = total + 1

# if n6 >0:
#         total = total + 1

# print(total,"valores positivos")






#1066

# n1 =float(input())
# n2 =float(input())
# n3 =float(input())
# n4 =float(input())
# n5 =float(input())

# par = 0
# if n1%2 == 0:
#         par = par + 1

# if n2%2 == 0:
#         par = par + 1

# if n3%2 == 0:
#         par = par + 1

# if n4%2 == 0:
#         par = par + 1

# if n5%2 == 0:
#         par = par + 1


# print(par,"Valor(es) par(es)")



# impar = 0
# if n1%2 == 1:
#         impar = impar + 1

# if n2%2 == 1:
#         impar = impar + 1

# if n3%2 == 1:
#         impar = impar + 1

# if n4%2 == 1:
#         impar = impar + 1

# if n5%2 == 1:
#         impar = impar + 1

# print(impar,"Valor(es) impar(es)")



# positivo = 0
# if n1 >0:
#         positivo = positivo + 1

# if n2 >0:
#         positivo = positivo + 1

# if n3 >0:
#         positivo = positivo + 1

# if n4 >0:
#         positivo = positivo + 1

# if n5 >0:
#         positivo = positivo + 1


# print(positivo,"Valor(es) positivo(s)")




# negativo = 0
# if n1 <0:
#         negativo = negativo + 1

# if n2 <0:
#         negativo = negativo + 1

# if n3 <0:
#         negativo = negativo + 1

# if n4 <0:
#         negativo = negativo+ 1

# if n5 <0:
#         tnegativo = negativo + 1


# print(negativo,"Valor(es) negativo(s)")






#1097
# I = 1
# j=6
# while I <=9:
        
#         s = j+1
#         a = j-1
#         print("I={} J={}".format(I,s))
#         print("I={} J={}".format(I,j))
#         print("I={} J={}".format(I,a))

#         I+=2
#         j=s+1