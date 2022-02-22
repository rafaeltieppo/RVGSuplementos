<?php

	class Suplementos {
		var $idSuplemento;
		var $idAdministrador;
		var $tipo;
		var $preco;
		var $nome;
		var $quantidade;
		var $lancamento;
		var $imagem;

		function getIdSuplemento(){
			return $this->idSuplemento;
		}
		function setIdSuplemento($idSuplemento){
			$this->idSuplemento = $idSuplemento;
		}

		function getIdAdministrador(){
			return $this->idAdministrador;
		}
		function setIdAdministrador($idAdministrador){
			$this->idAdministrador = $idAdministrador;
		}

		function getTipo(){
			return $this->tipo;
		}
		function setTipo($tipo){
			$this->tipo = $tipo;
		}

		function getPreco(){
			return $this->preco;
		}
		function setPreco($preco){
			$this->preco = $preco;
		}

		function getNome(){
			return $this->nome;
		}
		function setNome($nome){
			$this->nome = $nome;
		}

		function getQuantidade(){
			return $this->quantidade;
		}
		function setQuantidade($quantidade){
			$this->quantidade = $quantidade;
		}

		function getLancamento(){
			return $this->lancamento;
		}
		function setLancamento($lancamento){
			$this->lancamento = $lancamento;
		}

		function getImagem(){
			return $this->imagem;
		}
		function setImagem($imagem){
			$this->imagem = $imagem;
		}
	}

	class SuplementosDAO {
		function create($suplementos) {
			$result = array();

			try {
				$query = "INSERT INTO suplementos (id_administrador, tipo, nome, preco, quantidade) VALUES (". implode( '","', $suplementos) .");";

				$con = Connection::getInstance();

				if($con->exec($query) >= 1){
					$id = $con->lastInsertId();

					$result['id'] = $id;
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
