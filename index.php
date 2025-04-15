<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Фотогалерея</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
    <h1>Добро пожаловать в нашу фотогалерею</h1>
    <nav>
        <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#gallery">Галерея</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#contact">Контакты</a></li>
        </ul>
    </nav>
</header>

<section id="gallery">
    <h2>Наша коллекция</h2>
    <div class="gallery-container">
        <?php
        $photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"];
        foreach ($photos as $photo) {
            echo "<img src='$photo' alt='Фотография'>";
        }
        ?>
    </div>
</section>

<section id="about">
    <h2>О нас</h2>
    <p>Наша фотогалерея создана для тех, кто ценит искусство фотографии. Мы собрали лучшие снимки со всего мира.</p>
</section>

<section id="contact">
    <h2>Контакты</h2>
    <p>Свяжитесь с нами: <a href="mailto:info@example.com">info@example.com</a></p>
</section>

<footer>
    <p>&copy; <?php echo date("Y"); ?> Фотогалерея. Все права защищены.</p>
</footer>
</body>
</html>
