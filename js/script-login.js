function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";

  const size = Math.random() * 5 + 5;
  snowflake.style.width = size + "px";
  snowflake.style.height = size + "px";

  const startX = Math.random() * window.innerWidth;
  const endX = Math.random() * window.innerWidth;

  snowflake.style.left = startX + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

  snowflake.addEventListener("animationiteration", () => {
    snowflake.style.left = Math.random() * window.innerWidth + "px";
  });

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 200);
