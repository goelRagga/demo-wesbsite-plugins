import { useEffect } from "react";
import "./App.css";
import MarqueeCarousel from "./MarqueCarousel";

function App() {
  useEffect(() => {
    const loadScripts = () => {
      // Story Script
      const storyScript = document.createElement("script");
      storyScript.type = "module";
      storyScript.async = true;
      storyScript.src = "https://story.lively.li/LivelyStoryPlugin.js";

      // Hero Script
      const heroScript = document.createElement("script");
      heroScript.type = "module";
      heroScript.crossOrigin = "";
      heroScript.src = "https://hero.lively.li/bundle.min.js";

      // SF Script
      const videoScript = document.createElement("script");
      videoScript.type = "module";
      videoScript.defer = true;
      videoScript.src = "https://video.lively.li/LIVELY_SF_FEED.js";

      // Interactive PiP Script
      const pipScript = document.createElement("script");
      pipScript.type = "module";
      pipScript.crossOrigin = "";
      pipScript.src = "https://interactive-pip.lively.li/bundle.min.js";

      // Append the scripts
      document.body.appendChild(storyScript);
      document.body.appendChild(heroScript);
      document.body.appendChild(videoScript);
      document.body.appendChild(pipScript);

      // Cleanup scripts on unmount
      return () => {
        document.body.removeChild(storyScript);
        document.body.removeChild(heroScript);
        document.body.removeChild(videoScript);
        document.body.removeChild(pipScript);
      };
    };

    // Load scripts on component mount
    const cleanup = loadScripts();

    // Re-load scripts when the window is loaded (browser back event)
    window.addEventListener("load", loadScripts);

    // Cleanup event listener
    return () => {
      cleanup && cleanup();
      window.removeEventListener("load", loadScripts);
    };
  }, []);

  const StoryBrands = [
    <div className="whiteContainer">
      <img
        className="brandImage"
        src="/Helios_Black_Logo.webp"
        draggable="false"
      />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/noiseLogo.png" draggable="false" />
    </div>,
    <img className="brandImage" src="/freeCultrLogo.jpg" draggable="false" />,
    <div className="whiteContainer">
      <img className="brandImage" src="/fashionDream.webp" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/dressup.png" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/apella.avif" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/asiaPaints.png" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/bluenectar.avif" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/diabexy.jpg" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/everyday.jpeg" draggable="false" />
    </div>,

    <img className="brandImage" src="/fabus.avif" draggable="false" />,
    <div className="whiteContainer">
      <img className="brandImage" src="/famyo.webp" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/fashionDream.png" draggable="false" />
    </div>,
  ];

  const feedBrands = [
    <div className="whiteContainer">
      <img className="brandImage" src="/indiaCircus.png" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/ishkaara.avif" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/jaguar.jpg" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/justherbs.png" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/kama.png" draggable="false" />
    </div>,

    <img className="brandImage" src="/leaClothing.webp" draggable="false" />,
    <div className="whiteContainer">
      <img className="brandImage" src="/napchief.png" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/organic.webp" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/sleepyowl.png" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/taruni.jpg" draggable="false" />
    </div>,
    <div className="whiteContainer">
      <img className="brandImage" src="/urbanMonkey.jpeg" draggable="false" />
    </div>,
  ];

  return (
    <>
      <nav>
        <a
          className={"demoSiteHref"}
          href="https://shop-lively-8057.myshopify.com/"
        >
          Actual Demo Site
        </a>
      </nav>
      <div>
        <div className="sectionPlugin" style={{ height: "60vh" }}>
          <h1 id="storyPlugin">Story Plugin</h1>
          <div
            className="render_lively_story_plugin"
            brand_id="7650cedcf0"
            flow="shopify"
            wid_id="b52677b75b"
            placement="home"
            style={{ zIndex: 9999 }}
          ></div>

          <span>Brands Using</span>
          <MarqueeCarousel items={StoryBrands} />
        </div>

        <div className="sectionPlugin" style={{ height: "80vh" }}>
          <h1 id="storyPlugin">Hero Banner Plugin</h1>
          <div
            className="render_lively_product_hero_plugin"
            brand_id="7650cedcf0"
            wid_id="bacf82ca4d"
            flow=""
            placement="home"
          ></div>
        </div>
        <div
          className="sectionPlugin"
          style={{ height: "100vh", marginTop: "30vh" }}
        >
          <h1 id="sfPulgin">Shoppable Feeds Plugin</h1>
          <div
            className="render_lively_html_content"
            brand_id="7650cedcf0"
            flow="w3rt5"
            wid_id="9a0864b768"
          ></div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <div style={{ marginBottom: "16px" }}> Brands Using</div>
          <MarqueeCarousel items={feedBrands} />
        </div>

        <div
          className="sectionPlugin"
          style={{ height: "100vh", marginTop: "20vh" }}
        >
          <h1 id="3dSFPlugin">3D SF Plugin</h1>
          <div
            className="render_lively_html_content"
            brand_id="7650cedcf0"
            flow="w3rt5"
            wid_id="37ae8b93bd"
            layout="866dcbb664"
          ></div>
        </div>

        <div
          className="render_lively_interactive_pip"
          brand_id="7650cedcf0"
          wid_id="5721c686ac"
          showtitle="false"
        ></div>
      </div>
    </>
  );
}

export default App;
