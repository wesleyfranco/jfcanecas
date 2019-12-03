<?php

abstract class Conexao {
    private static $banco      = 'jfcanecas';
    private static $host       = 'localhost';
    private static $usuario    = 'root';
    private static $senha      = '';

    protected static function conectar()
    {
        try {
            $conn = new PDO("mysql:host=" . self::$host . ";dbname=" . self::$banco, self::$usuario, self::$senha);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conn->exec("set names utf8");
        } catch(PDOException $e) {
            echo json_encode(['erro' => $e->getMessage()]);
            exit;
        }
        return $conn;
    }
}