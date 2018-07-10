<?php
    function getConnection() {
        $host = "localhost";
        $port = "5432";
        $user = "postgres";
        $password = "postgres";
        $dbname = "stickynotes"; 

        $connection = pg_pconnect("host=$host port=$port user=$user password=$password dbname=$dbname")
                or die (json_encode(["status" => 404, "res" => "Error -> " + pg_last_error()]));
                
        return $connection;
    }       
?>