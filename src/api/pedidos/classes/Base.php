<?php
require_once 'Conexao.php';

abstract class Base extends Conexao {
    protected $conexao;

    public function __construct()
    {
        $this->conexao = Conexao::conectar();
    }
}