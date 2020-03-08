
<?php
    if (!empty($_SESSION['login'])) {
        echo "
            <header class='header-block'>
                <div class='header-block__user-name'>".$_SESSION['name']."</div>
                <div class='header-block__button'>
                    <a href=\"modules/auth_out.php\" target=\"content\">Sing out</a>
                </div>
            </header>";
    } else{
        echo "
        <header class='header-block'>
                <div class='header-block__user-name'>Anonim</div>
                <div class='header-block__button'>
                    <a href=\"modules/registration.php\" target=\"content\">Sing up</a>
                    <a href=\"modules/auth.php\" target=\"content\">Sing in</a>
                </div>
            </header>";
    }
?>