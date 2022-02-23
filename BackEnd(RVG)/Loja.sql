
--------------POST------------------------------
Clientes: {
    "id": 1,
    "nascimento": 28/03/2007,
    "nome": Vitor Tieppo,
    "email": vitieppo@gmail.com,
    "senha": guardaroupa123,
    "imagem": fotooabcde,
    "endereco": 13999-394,
}

Suplementos: {
    "id": 1,
    "tipo" Whey,
    "nome": Rafael Leme,
    "imagem": fotinhaabcd,
    "quantidade": 2,
    "lançamento": 31/03/2022,
    "preco": 200, 
}

Admnistrador: {
    "id": 1,
    "nome": Gabriel Rocha,
    "nascimento": 02/05/2005,
    "email": gabrocha@gmail.com,
    "senha": gab12345,
}

Promocoes: {
    "id": 1,
    "id_suplemento": 1,
    "porcentagem": 20%,
    "dias": 7,
}

Pedido: {
    "id": 1,
    "id_cliente":1,
    "id_suplemento": 1,
    "nome": Gusta Lemos,
    "imagem": assdadadasadasd,
    "preco": 200,
    "quantidade": 2,
}

--------------------GET--------------------- : 

Clientes: {
     "nascimento": 28/03/2007,
    "nome": Vitor Tieppo,
    "email": vitieppo@gmail.com,
    "senha": guardaroupa123,
    "imagem": fotooabcde,
    "endereco": 13999-394,
}

Suplementos: {
    "tipo" Whey,
    "nome": Rafael Leme,
    "imagem": fotinhaabcd,
    "lançamento": 31/03/2022,
    "preco": 200,
}

Admnistrador: {
    "nome": Gabriel Rocha,
    "nascimento": 02/05/2005,
    "email": gabrocha@gmail.com,
    "senha": gab12345,
}

Promocoes: {
    "porcentagem": 20%,
    "dias": 7,
}

Pedido: {
    "nome": Gusta Lemos,
    "imagem": assdadadasadasd,
    "preco": 200,
    "quantidade": 2,
}

----------------------PUT----------------------------:

Clientes: {
    "nome": Vitor Tieppo,
    "email": vitieppo@gmail.com,
    "senha": guardaroupa123,
    "endereco": 13999-394,
}

Suplementos: {
    "imagem": fotinhaabcd,
     "preco": 200,
}

Admnistrador: {
    "email": gabrocha@gmail.com,
    "senha": gab12345,
}

Promocoes: {
      "porcentagem": 20%,
}

Pedido: {
     "quantidade": 2,
}

----------------------DEL----------------------------:

Clientes: {
     "id": 1,
}

Suplementos: {
    "id": 1,
}

Admnistrador: {
     "id": 1,
}

Promocoes: {
    "id": 1,
    "id_suplemento": 1,
}

Pedido: {
    "id": 1,
    "id_cliente":1,
    "id_suplemento": 1,
}
