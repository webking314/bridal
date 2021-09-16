import { useEffect, useState } from "react";

export default function Loading({ visible }) {
  const [disabled, setDisabled] = useState(visible);
  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  });
  useEffect(() => {
    if (!visible) document.body.style.overflow = "visible";
    else document.body.style.overflow = "hidden";
  }, [disabled]);
  return (
    visible && (
      <div id="loading">
        {(document.body.style.overflow = "hidden")}
        <div
          className="loading-spinner"
          style={{ transform: "rotate" + "(" + 45 + "deg)" }}
        >
          <div
            className="loading-spinner__group"
            style={{ width: 110 + "px", height: 110 + "px" }}
          >
            <span
              className="loading-spinner__line loading-spinner__line--first"
              style={{ animationDelay: 0.0 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--second"
              style={{ animationDelay: 0.0 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--third"
              style={{ animationDelay: 0.0 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--fourth"
              style={{ animationDelay: 0.0 + "s" }}
            ></span>
          </div>
          <div
            className="loading-spinner__group"
            style={{ width: 130 + "px", height: 130 + "px" }}
          >
            <span
              className="loading-spinner__line loading-spinner__line--first"
              style={{ animationDelay: 0.1 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--second"
              style={{ animationDelay: 0.1 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--third"
              style={{ animationDelay: 0.1 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--fourth"
              style={{ animationDelay: 0.1 + "s" }}
            ></span>
          </div>
          <div className="loading-spinner__group">
            <span
              className="loading-spinner__line loading-spinner__line--first"
              style={{ animationDelay: 0.2 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--second"
              style={{ animationDelay: 0.2 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--third"
              style={{ animationDelay: 0.2 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--fourth"
              style={{ animationDelay: 0.2 + "s" }}
            ></span>
          </div>
          <div
            className="loading-spinner__group"
            style={{ width: 170 + "px", height: 170 + "px" }}
          >
            <span
              className="loading-spinner__line loading-spinner__line--first"
              style={{ animationDelay: 0.3 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--second"
              style={{ animationDelay: 0.3 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--third"
              style={{ animationDelay: 0.3 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--fourth"
              style={{ animationDelay: 0.3 + "s" }}
            ></span>
          </div>
          <div
            className="loading-spinner__group"
            style={{ width: 190 + "px", height: 190 + "px" }}
          >
            <span
              className="loading-spinner__line loading-spinner__line--first"
              style={{ animationDelay: 0.4 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--second"
              style={{ animationDelay: 0.4 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--third"
              style={{ animationDelay: 0.4 + "s" }}
            ></span>
            <span
              className="loading-spinner__line loading-spinner__line--fourth"
              style={{ animationDelay: 0.4 + "s" }}
            ></span>
          </div>
        </div>
      </div>
    )
  );
}
