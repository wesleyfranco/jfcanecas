<?php

require_once 'classes/Pedidos.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE");

$pedidos    = new Pedidos;
$metodoHttp = $_SERVER['REQUEST_METHOD'];

switch ($metodoHttp) {
    case 'GET':       
        $pedidos->retornaPedidos();
        break;
    case 'POST':
    case 'OPTIONS':
        $pedidos->salvaPedido();
        break;
    case 'PUT':
    case 'OPTIONS':
        $pedidos->atualizaPedido();
        break;
    case 'PATCH':
    case 'OPTIONS':
        $pedidos->atualizaEntregaPedido();
        break;    
    case 'DELETE':
    case 'OPTIONS':
        $pedidos->excluiPedido();
        break;
    default:
        echo json_encode(['erro' => true, 'msg' => 'Método não suportado']);
}