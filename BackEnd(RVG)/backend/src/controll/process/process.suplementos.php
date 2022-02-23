<?php

	require("../../domain/connection.php");
	require("../../domain/suplementos.php");

	class SuplementosProcess 
	{
		var $sd;

		function doGet($arr)
		{
			$sd = new SuplementosDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doPost($arr)
		{
			$sd = new SuplementosDAO();
			$arrObject = array();
			$result = $sd->create();
			http_response_code(200);
			echo json_encode($result);
		}


		function doPut($arr)
		{
			$sd = new SuplementosDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}


		function doDelete($arr)
		{
			$sd = new SuplementosDAO();
			$result = "use to result to DAO";
			http_response_code(200);
			echo json_encode($result);
		}
	}