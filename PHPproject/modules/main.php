<?php
if (empty($_SESSION['login'])) {
    echo "<link rel='stylesheet' href='./css/header.css' />
        <link rel='stylesheet' href='./css/main.css' />
        <main class='main-container'>
            <div class='main-container__title'>
                <img class='logo__item' src='./img/logo.png'>
                <span class='title'>Welcome!</span>
            </div>
            <div class='main-container__description'>
                For show more information you need SING IN or SING UP if you don't have account
            </div>
        </main>";
} else {
    echo "<link rel='stylesheet' href='../css/header.css' />
        <link rel='stylesheet' href='../css/main.css' />
        <link rel='stylesheet' href='../css/catalog.css' />
        <main class='main-container'>
            <div class='main-container__grid'>
                <div class='grid__item'>
                    <a href=\"https://camouf.ru/designes/ready-psd-layouts-for-saito/9108.html\" target=\"content\">
                        <img class='item__maket' src='./img/maket1.jpg'>
                    </a>
                </div>
                <div class='grid__item'>
                    <a href=\"https://camouf.ru/designes/ready-psd-layouts-for-saito/7836.html\" target=\"content\">
                        <img class='item__maket' src='./img/maket2.jpg'>
                    </a>
                </div>
                <div class='grid__item'>
                    <a href=\"https://camouf.ru/designes/ready-psd-layouts-for-saito/7833.html\" target=\"content\">
                        <img class='item__maket' src='./img/maket3.jpg'>
                    </a>
                </div>
                <div class='grid__item'>
                    <a href=\"https://camouf.ru/designes/ready-psd-layouts-for-saito/3569.html\" target=\"content\">
                        <img class='item__maket' src='./img/maket4.jpg'>
                    </a>
                </div>
                <div class='grid__item'>
                    <a href=\"https://camouf.ru/designes/ready-psd-layouts-for-saito/1959.html\" target=\"content\">
                        <img class='item__maket' src='./img/maket5.jpg'>
                    </a>
                </div>
                <div class='grid__item'>
                    <a href=\"https://camouf.ru/designes/ready-psd-layouts-for-saito/1953.html\" target=\"content\">
                        <img class='item__maket' src='./img/maket6.jpg'>
                    </a>
                </div>
            </div>
        </main>";
}
?>