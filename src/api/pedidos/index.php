<?php

require_once 'classes/Pedidos.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE");

date_default_timezone_set('America/Sao_Paulo');

$pedidos    = new Pedidos;
$metodoHttp = $_SERVER['REQUEST_METHOD'];

switch ($metodoHttp) {
    case 'GET':       
        $pedidos->retornaPedidos();
        break;
    case 'POST':
        $pedidos->salvaPedido();
        break;
    case 'PATCH':
        $pedidos->atualizaEntregaPedido();
        break;    
    case 'DELETE':
        $pedidos->excluiPedido();
        break;
    case 'OPTIONS':    
    break;
    default:
        echo json_encode(['erro' => true, 'msg' => 'Método não suportado']);
}