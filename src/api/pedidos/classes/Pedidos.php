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
        $dados = json_decode(file_get_contents('php://input'));
        $stmt = $this->conexao->prepare('INSERT INTO pedidos (cliente, nome_arte, tipo_caneca, qtd_itens, valor_total, data_entrega) 
            VALUES(:cliente, :nome_arte, :tipo_caneca, :qtd_itens, :valor_total, :data_entrega)');
        $stmt->execute(array(
            ':cliente' => $dados->cliente,
            ':nome_arte' => $dados->nome_arte,
            ':tipo_caneca' =>$dados->tipo_caneca,
            ':qtd_itens' => $dados->qtd_itens,
            ':valor_total' => $dados->valor_total,
            ':data_entrega' => $dados->data_entrega,
        ));
        
        echo json_encode(['numPedido' =>  $stmt->rowCount()]); 
    }
}
