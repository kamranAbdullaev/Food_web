<?php
 $_POST = json_decode(file_get_contents('php://input'), true); // Получение JSON файла
 echo var_dump($_POST); // Берет данные  то тчо пришло от клиента превращает в строку и показывает клиенту -->
