<?php

	class Promocoes {
		var $idPromocoes;
		var $idSuplementos;
		var $porcentagem;
		var $dias;

		function getIdPromocoes(){
			return $this->idPromocoes;
		}
		function setIdPromocoes($idPromocoes){
			$this->idPromocoes = $idPromocoes;
		}

		function getIdSuplementos(){
			return $this->idSuplementos;
		}
		function setIdSuplementos($idSuplementos){
			$this->idSuplementos = $idSuplementos;
		}

		function getPorcentagem(){
			return $this->porcentagem;
		}
		function setPorcentagem($porcentagem){
			$this->porcentagem = $porcentagem;
		}

		function getDias(){
			return $this->dias;
		}
		function setDias($dias){
			$this->dias = $dias;
		}
	}

	class PromocoesDAO {
		function create($promocoes) {
			$result = array();

			try {
				$query = "INSERT INTO table_name (column1, column2) VALUES (value1, value2)";

				$con = new Connection();

				if(Connection::getInstance()->exec($query) >= 1){
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
