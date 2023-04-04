import React, { useState, useEffect } from "react";

import { TypeAnimation } from "react-type-animation";
import "./Container.scss";

const languages = [
  "Hello, I'm",
  "Bonjour, je m'appelle",
  "こんにちは、私の名前は",
  "Hola soy,",
];

function Container() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
    }, 10000);

    return () => clearTimeout(intervalId);
  }, [currentLanguageIndex]);

  return (
    <section>
      <div>
        <div className={"container"}>
          <div className="rolodex-inner">
            <div className={"rolodex-item"}>
              <h1>
                <span className="languages">
                  {languages[currentLanguageIndex]}
                </span>
                <a
                  className="word"
                  href="https://github.com/muhammad-usama12"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  Usama
                </a>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h2 className="initial">
            <span className="fix">I'm a </span>
            <TypeAnimation
              className="typewriter"
              speed={{ type: "keyStrokeDelayInMs", value: 100 }}
              deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
              sequence={[
                "problem solver",
                "fast learner",
                "logical thinker",
                "full-stack developer",
              ]}
            />
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Container;
