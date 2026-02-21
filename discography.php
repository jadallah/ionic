<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Discography</title>
    <link rel="icon" href="images/favicon.ico" />
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body class="discography-page">
    <main class="discography-page-wrap">
      <header class="discography-header">
        <div class="discography-left-links">
          <a class="home-link" href="index.php">Home</a>
          <ul class="lang-switcher">
            <li><a href="#">English</a></li>
            <li>|</li>
            <li><a href="#">عربي</a></li>
          </ul>
        </div>
        <ul class="discography-socials">
          <li><a href="#" aria-label="mute"><i class="fa-solid fa-volume-xmark"></i></a></li>
          <li><a href="#" aria-label="volume"><i class="fa-solid fa-volume-high"></i></a></li>
          <li><a href="#" aria-label="linkedin"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a href="#" aria-label="youtube"><i class="fa-brands fa-square-youtube"></i></a></li>
          <li><a href="#" aria-label="facebook"><i class="fa-brands fa-square-facebook"></i></a></li>
          <li><a href="#" aria-label="instagram"><i class="fa-brands fa-square-instagram"></i></a></li>
        </ul>
      </header>

      <section class="discography-layout">
        <div class="disc-container">
          <div id="main-disc">
            <img id="main-disc-image" src="images/disc/art-1.jpg" alt="Main Disc" />
            <img id="album-cover" src="" alt="Album Cover" />
            <div class="disc-label">Discography</div>
          </div>

          <div class="cd-list">
            <img src="images/disc/thumb-1.jpg" alt="CD1" class="cd-thumb" data-album="homayoun" />
            <img src="images/disc/photo-1.jpg" alt="CD2" class="cd-thumb" data-album="hajess" />
            <img src="images/disc/art-1.jpg" alt="CD3" class="cd-thumb" data-album="glory" />
          </div>
        </div>

        <aside class="track-list">
          <h2 id="album-title">Discography</h2>
          <div id="tracks"></div>
        </aside>
      </section>

      <section class="album-detail-box" aria-label="album notes"></section>
    </main>


    <audio id="disc-audio-player" preload="metadata"></audio>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>
