<?php

	require("../../domain/connection.php");
	require("../../domain/pedidos.php");

	class PedidosProcess 
	{
		var $pd;

		function doGet($arr)
		{
			$pd = new PedidosDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doPost($arr)
		{
			$arrObject = array();
			$pd = new PedidosDAO();
			$pedido = new Pedidos();

			$pedido->setNome($arr->nome);
			$pedido->setImagem($arr->imagem);
			
			$arrObject['nome'] 		= $arr->nome;
			$arrObject['imagem'] 	= $arr->imagem;
	
			$result = $pd->create($arrObject);
			http_response_code(200);
			echo json_encode($result);
		}


		function doPut($arr)
		{
			$pd = new PedidosDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doDelete($arr)
		{
			$pd = new PedidosDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}
	}