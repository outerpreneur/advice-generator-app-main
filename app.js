const adviceButton = document.getElementById("getAdviceButton");
const adviceText = document.getElementById("adviceText");
const adviceId = document.getElementById("adviceId");

adviceButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const advice = data.slip.advice;
    const id = data.slip.id;
    adviceId.innerText = id;
    adviceText.innerText = `"` + advice + `"`;
  } catch (error) {
    console.error("An error occurred:", error);
    adviceText.innerText = error;
  }
});
