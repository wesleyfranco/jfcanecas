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

    public function salvaPedidos()
    {
        $stmt = $this->conexao->prepare('INSERT INTO pedidos (cliente, nome_arte, tipo_caneca, qtd_itens, valor_total, data_entrega) 
            VALUES(:cliente, :nome_arte, :tipo_caneca, :qtd_itens, :valor_total, :data_entrega)');
        $stmt->execute(array(
            ':cliente' => $_POST['cliente'],
            ':nome_arte' => $_POST['nome_arte'],
            ':tipo_caneca' => $_POST['tipo_caneca'],
            ':qtd_itens' => $_POST['qtd_itens'],
            ':valor_total' => $_POST['valor_total'],
            ':data_entrega' => $_POST['data_entrega'],
        ));
        
        echo $stmt->rowCount(); 
    }
}
