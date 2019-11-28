<?php

require_once 'classes/Pedidos.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

$pedidos    = new Pedidos;
$metodoHttp = $_SERVER['REQUEST_METHOD'];

switch ($metodoHttp) {
    case 'GET':
        $pesquisa = (isset($_GET['cliente'])) ? $_GET['cliente'] : '';
        $pedidos->retornaPedidos($pesquisa);
        break;
    case 'POST':
    case 'OPTIONS':
        $pedidos->salvaPedido();
        break;
    case 'PUT':
        $idAtualizacao      = $_SERVER['PATH_INFO'];
        $dadosAtualizacao   = file_get_contents('php://input');
        break;
    case 'DELETE':
    case 'OPTIONS':       
        $pedidos->excluiPedido();
        break; 
    default:
        echo json_encode(['erro' => 'Método não suportado']);    
}