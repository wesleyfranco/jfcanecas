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
            $stmt->bindValue(':cliente', '%' . $_GET['cliente'] . '%', PDO::PARAM_STR);
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
        $stmt = $this->conexao->prepare('INSERT INTO pedidos (cliente, telefone, nome_arte, tipo_caneca, qtd_itens, valor_total, data_entrega) 
            VALUES(:cliente, :telefone, :nome_arte, :tipo_caneca, :qtd_itens, :valor_total, :data_entrega)');
        $valorTotal = (!empty($dados->valor_total)) ? floatval($dados->valor_total) : null;
        $stmt->bindValue(':cliente', !empty($dados->cliente) ? $dados->cliente : null, PDO::PARAM_STR);
        $stmt->bindValue(':telefone', !empty($dados->telefone) ? $dados->telefone : null, PDO::PARAM_STR);
        $stmt->bindValue(':nome_arte', !empty($dados->nome_arte) ? $dados->nome_arte : null, PDO::PARAM_STR);
        $stmt->bindValue(':tipo_caneca', !empty($dados->tipo_caneca) ? $dados->tipo_caneca : null, PDO::PARAM_STR);
        $stmt->bindValue(':qtd_itens', !empty($dados->qtd_itens) ? $dados->qtd_itens : null, PDO::PARAM_INT);
        $stmt->bindValue(':valor_total', $valorTotal);
        $stmt->bindValue(':data_entrega', !empty($dados->data_entrega) ? $dados->data_entrega : null);
        try {
            $stmt->execute();
            echo json_encode(['erro' => false, 'msg' =>  'Pedido cadastrado com sucesso']);
        } catch(PDOException $e) {
            echo json_encode(['erro' => true, 'msg' => 'Erro ao cadastrar pedido, verifique se todos os campos estão preenchidos']);
        }    
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
        $stmt->bindParam(':entregue', $dados->entregue, PDO::PARAM_BOOL);
        $stmt->bindParam(':id', $id);
        try {
            $stmt->execute();
            echo json_encode(['erro' => false, 'msg' => 'Pedido entregue']);
        } catch(PDOException $e) {
            echo json_encode(['erro' => true, 'msg' => 'Erro ao entregar pedido']);
        }
    }
}