<?php

$res = shell_exec("cd /home/wwwroot/default/book-editer && sudo git pull 2>&1"); 
echo 'bookediter更新成功:'.date('y-m-d H:i:s');