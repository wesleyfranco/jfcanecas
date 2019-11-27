<?php

require_once 'classes/Pedidos.php';

$pedidos    = new Pedidos;
$metodoHttp = $_SERVER['REQUEST_METHOD'];
if ($metodoHttp === 'GET') {
    $pesquisa = (isset($_GET['cliente'])) ? $_GET['cliente'] : '';
    $pedidos->retornaPedidos($pesquisa);
} else if($metodoHttp === 'POST') {

} else if($metodoHttp === 'PUT') {
    $idAtualizacao      = $_SERVER['PATH_INFO'];
    $dadosAtualizacao   = file_get_contents('php://input');
} else if($metodoHttp === 'DELETE') {

} else {
    echo json_encode(['erro' => 'Método não aceito']);
}