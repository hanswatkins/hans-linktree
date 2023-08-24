import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-slate-900 dark:text-white">Arbour</h1>
      </header>

      <ul className="mt-3">
        <li>
          <a
            className="button is-outlined is-fullwidth is-white"
            id="arbour-console"
            target="_blank"
            href="https://audio-mixer-with-visualization.onrender.com/"
          >
            arbour console <i class="fa-solid fa-headphones"></i>
          </a>
        </li>
        <li>
          <a
            className="button is-outlined is-fullwidth is-white"
            id="spotify"
            target="_blank"
            href="https://open.spotify.com/artist/3pSfwb3p6BVPTYDkNdgxS2?si=1M3-SutNThyb310WW0UAvQ"
          >
            spotify <i class="fa-brands fa-spotify"></i>
          </a>
        </li>
        <li>
          <a
            className="button is-outlined is-fullwidth is-white"
            id="apple-music"
            target="_blank"
            href="https://music.apple.com/us/artist/arbour/1067870471"
          >
            apple music <i class="fa-brands fa-apple"></i>
          </a>
        </li>
        <li>
          <a
            className="button is-outlined is-fullwidth is-white"
            id="youtube"
            target="_blank"
            href="https://www.youtube.com/prod_arbour"
          >
            youtube <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a
            className="button is-outlined is-fullwidth is-white"
            id="instagram"
            target="_blank"
            href="https://www.instagram.com/prod_arbour/"
          >
            instagram <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            className="button is-outlined is-fullwidth is-white"
            id="twitter"
            target="_blank"
            href="https://twitter.com/prod_arbour"
          >
            twitter <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            className="button is-outlined is-fullwidth is-white"
            id="facebook"
            target="_blank"
            href="https://www.facebook.com/arbourofficial"
          >
            facebook <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
      </ul>
      <div className="footer-link" id="footer">
        <a href="https://www.hanswatkins.com">Created by Hans Watkins</a>
      </div>
    </div>
  );
}

export default App;
