<?php

	require("../../domain/connection.php");
	require("../../domain/promocoes.php");

	class PromocoesProcess 
	{
		var $pd;

		function doGet($arr)
		{
			$pd = new PromocoesDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doPost($arr)
		{
			$pd = new PromocoesDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doPut($arr)
		{
			$pd = new PromocoesDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doDelete($arr)
		{
			$pd = new PromocoesDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}
	}