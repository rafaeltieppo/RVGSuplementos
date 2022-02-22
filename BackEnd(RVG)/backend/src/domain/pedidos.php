<?php

	class Pedidos {
		var $idPedido;
		var $idCliente;
		var $idSuplementos;
		var $nome;
		var $imagem;
		var $preco;
		var $quantidade;

		function getIdPedido(){
			return $this->idPedido;
		}
		function setIdPedido($idPedido){
			$this->idPedido = $idPedido;
		}

		function getIdCliente(){
			return $this->idCliente;
		}
		function setIdCliente($idCliente){
			$this->idCliente = $idCliente;
		}

		function getIdSuplementos(){
			return $this->idSuplementos;
		}
		function setIdSuplementos($idSuplementos){
			$this->idSuplementos = $idSuplementos;
		}

		function getNome(){
			return $this->nome;
		}
		function setNome($nome){
			$this->nome = $nome;
		}

		function getImagem(){
			return $this->imagem;
		}
		function setImagem($imagem){
			$this->imagem = $imagem;
		}

		function getPreco(){
			return $this->preco;
		}
		function setPreco($preco){
			$this->preco = $preco;
		}

		function getQuantidade(){
			return $this->quantidade;
		}
		function setQuantidade($quantidade){
			$this->quantidade = $quantidade;
		}
	}

	class PedidosDAO {
		function create($pedidos) {
			$result = array();

			try {
				$query = "INSERT INTO clientes VALUES (". implode( ',', $pedidos ) .");";
					
				$con = Connection::getInstance();

				if($con->exec($query) >= 1){
					$id = $con->lastInsertId();
					$result['id']	=	intval($id);
				}
				
				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}

		function read() {
			$result = array();

			try {
				$query = "SELECT column1, column2 FROM table_name WHERE condition";

				$con = new Connection();

				$resultSet = Connection::getInstance()->query($query);

				while($row = $resultSet->fetchObject()){
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}

		function update() {
			$result = array();

			try {
				$query = "UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition";

				$con = new Connection();

				$status = Connection::getInstance()->prepare($query);

				if($status->execute()){
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}

		function delete() {
			$result = array();

			try {
				$query = "DELETE FROM table_name WHERE condition";

				$con = new Connection();

				if(Connection::getInstance()->exec($query) >= 1){
				}

				$con = null;
			}catch(PDOException $e) {
				$result["err"] = $e->getMessage();
			}

			return $result;
		}
	}
