<?php

require_once 'classes/Pedidos.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$pedidos    = new Pedidos;
$metodoHttp = $_SERVER['REQUEST_METHOD'];
switch ($metodoHttp) {
    case 'GET':
        $pesquisa = (isset($_GET['cliente'])) ? $_GET['cliente'] : '';
        $pedidos->retornaPedidos($pesquisa);
        break;
    case 'POST':
    case 'OPTIONS':
        $pedidos->salvaPedidos();
        break;
    case 'PUT':
        $idAtualizacao      = $_SERVER['PATH_INFO'];
        $dadosAtualizacao   = file_get_contents('php://input');
        break;
    case 'DELETE':
        $idAtualizacao      = $_SERVER['PATH_INFO'];
        break; 
    /*default:
        echo json_encode(['erro' => 'Método não suportado']);  */    
}