<?php
require_once 'Base.php';

class Pedidos extends Base {

    public function __construct() {
        parent::__construct();
    }

    public function retornaPedidos()
    {
        $pesquisa = (isset($_GET['cliente'])) ? " WHERE cliente LIKE :cliente" : '';
        $stmt = $this->conexao->prepare("SELECT * FROM pedidos {$pesquisa} ORDER BY data_entrega ASC");
        if (!empty($pesquisa)) {
            $stmt->bindValue(':cliente', '%' . $_GET['cliente'] . '%');
        }     
        try {
            $stmt->execute();
            $pedidos = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($pedidos);
        } catch(PDOException $e) {
            echo json_encode(['erro' => true, 'msg' => 'Erro ao pesquisar cliente']);
        }
    }

    public function salvaPedido()
    {
        $dados = json_decode(file_get_contents('php://input'));
        $stmt = $this->conexao->prepare('INSERT INTO pedidos (cliente, nome_arte, tipo_caneca, qtd_itens, valor_total, data_entrega) 
            VALUES(:cliente, :nome_arte, :tipo_caneca, :qtd_itens, :valor_total, :data_entrega)');
        $valorTotal = floatval($dados->valor_total);
        $stmt->bindParam(':cliente', $dados->cliente);
        $stmt->bindParam(':nome_arte', $dados->nome_arte);
        $stmt->bindParam(':tipo_caneca', $dados->tipo_caneca);
        $stmt->bindParam(':qtd_itens', $dados->qtd_itens);
        $stmt->bindParam(':valor_total', $valorTotal);
        $stmt->bindParam(':data_entrega', $dados->data_entrega);
        $stmt->execute();
        
        echo json_encode(['numPedido' =>  $stmt->rowCount()]);
    }

    public function excluiPedido()
    {
        $parametrosUrl  = explode('/', $_SERVER['PATH_INFO']);
        $id             = (int) $parametrosUrl[1];
        $stmt           = $this->conexao->prepare('DELETE FROM pedidos WHERE id = :id');
        $stmt->bindParam(':id', $id);
        try {
            $stmt->execute();
            echo json_encode(['erro' => false, 'msg' => 'Pedido excluído com sucesso']);
        } catch(PDOException $e) {
            echo json_encode(['erro' => true, 'msg' => 'Erro ao excluir pedido']);
        }
    }

    public function atualizaEntregaPedido()
    {
        $parametrosUrl  = explode('/', $_SERVER['PATH_INFO']);
        $id             = (int) $parametrosUrl[1];
        $dados          = json_decode(file_get_contents('php://input'));
        $stmt           = $this->conexao->prepare('UPDATE pedidos SET entregue = :entregue WHERE id = :id');
        $stmt->bindParam(':entregue', $dados->entregue);
        $stmt->bindParam(':id', $id);
        try {
            $stmt->execute();
            echo json_encode(['erro' => false, 'msg' => 'Pedido entregue']);
        } catch(PDOException $e) {
            echo json_encode(['erro' => true, 'msg' => 'Erro ao entregar pedido']);
        }
    }
}