<?php
	

	class Clientes {
		var $idCliente;
		var $nome;
		var $senha;
		var $email;
		var $nascimento;
		var $endereco;
		var $imagem;

		function getNome(){
			return $this->nome;
		}
		function setNome($nome){
			$this->nome = $nome;
		}

		function getSenha(){
			return $this->senha;
		}
		function setSenha($senha){
			$this->senha = $senha;
		}

		function getEmail(){
			return $this->email;
		}
		function setEmail($email){
			$this->email = $email;
		}

		function getNascimento(){
			return $this->nascimento;
		}
		function setNascimento($nascimento){
			$this->nascimento = $nascimento;
		}

		function getEndereco(){
			return $this->endereco;
		}
		function setEndereco($endereco){
			$this->endereco = $endereco;
		}

		function getImagem(){
			return $this->imagem;
		}
		function setImagem($imagem){
			$this->imagem = $imagem;
		}
	}

	class ClientesDAO {

		
		// OPÇOES( logar, cadastrar ) USUARIO (POST)
		/*
		function login($cliente) {
			$dao = new ClientesDAO();
			$result = "";
			
			if (property_exists($cliente->getNome(), 'nome')) {
				var_dump('entrou');
				$result = $dao->cadastroCliente($cliente);
			}else {
				var_dump('entrou2');
				$result = $dao->logarCliente($cliente);
			}

			return $result;
		}*/

		// CADASTRAR USUARIO (POST)
		function cadastroCliente($cliente) {
			$result = array();
			
			try {
				$query = "INSERT INTO clientes(email, senha, nome) 
						VALUES ('".$cliente->getEmail()."', '".$cliente->getSenha()."', '".$cliente->getNome()."');";
				
				$con = Connection::getInstance();

				if($con->exec($query) >= 1){
					$id = $con->lastInsertId();
					$result['nome'] = 	$cliente->getNome();
					$result['id'] 	= 	intval($id);
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}	

			return $result;
		}

		// LOGAR USUARIO (POST)
		function logarCliente($cliente) {

			$result = array();
			
			try {
				$query = "SELECT id_cliente, nome, imagem FROM clientes 
						WHERE email='".$cliente->getEmail()."' && senha=".$cliente->getSenha();

				$con = new Connection();

				$resultSet = Connection::getInstance()->query($query);
				
				while($row = $resultSet->fetchObject()){
					$result['nome'] 	= 	$row->nome;
					$result['id'] 		= 	$row->id_cliente;
					$result['imagem'] 	= 	$row->imagem;
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}
			
			return $result;
		}

		// SENHA (ALTERAR)
		function alterarSenha($cliente, $id) {
			$result = array();
	
			try {
				$query = "UPDATE clientes SET senha=:senhaNova WHERE id_cliente=:id && senha=:senhaAntiga";
				
				$con = new Connection();

				$status = Connection::getInstance()->prepare($query);
				$status->bindValue(':senhaNova', $cliente);
				$status->bindValue(':id', $id);
				$status->bindValue(':senhaAntiga', $arr->senhaAntiga);
				
				if($status->execute()){
					$result['sucesso'] = "alterado com sucesso";
				}else {
					$result['err'] = "erro na alteração";
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}

		// (LISTAR) USUARIO
		function listarCliente($id) {
			$result = array();

			try {
				$query = "SELECT id_cliente, nome, imagem, endereco, nascimento FROM clientes where id_cliente=$id";

				$con = new Connection();

				$resultSet = Connection::getInstance()->query($query);

				while($row = $resultSet->fetchObject()){
					$result['nome'] 		= 	$row->nome;
					$result['id'] 			= 	$row->id_cliente;
					$result['imagem'] 		= 	$row->imagem;
					$result['endereco'] 	= 	$row->endereco;
					$result['nascimento'] 	= 	$row->nascimento;
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}

		//  (imagem ou (endereco, nascimento)) USUARIO (ALTERAR)
		function alterarCadastro($cliente, $id) {
			$result = array();
			$query = "";

			try {
				$con = new Connection();

				if($cliente->getImagem() != null) {
					$query = "UPDATE clientes SET imagem=:imagemNova WHERE id_cliente=:id";
					$status = Connection::getInstance()->prepare($query);
					
					$status->bindValue(':id', $id);
					$status->bindValue(':imagemNova', $cliente->getImagem());
				}else {
					$query = "UPDATE clientes SET nascimento=:nascimento, endereco=:endereco WHERE id_cliente=:id";
					$status = Connection::getInstance()->prepare($query);

					$status->bindValue(':id', $id);
					$status->bindValue(':endereco', $cliente->getEndereco());
					$status->bindValue(':nascimento',$cliente->getNascimento());
				}

				if($status->execute()){
					$result['sucesso'] = "alterado com sucesso";
				}else {
					$result['err'] = "erro na alteração";
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
	}
