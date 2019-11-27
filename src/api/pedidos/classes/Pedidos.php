<?php
require_once 'Base.php';

class Pedidos extends Base {

    public function __construct() {
        parent::__construct();
    }

    public function retornaPedidos()
    {
        $stmt = $this->conexao->prepare('SELECT * FROM pedidos');
        $stmt->execute();
        $pedidos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($pedidos) > 0) {
            echo json_encode($pedidos);
        }
    }
}
