let dataText = document.querySelector(".data-text");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const stringsContainer = Array.from(document.querySelectorAll(".item"));

async function write(text) {
  let index = 0;
  while (index < text.length) {
    await sleep(100);
    index++;
    dataText.innerText = text.substring(0, index);
  }
}

async function erase() {
  let index = dataText.innerText.length;
  while (index >= dataText.innerText.length) {
    await sleep(100);
    dataText.innerHTML = dataText.innerText.substring(
      0,
      dataText.innerHTML.length - 2
    );
    index--;
  }
}

(async () => {
  let i;
  for (i = 0; i <= stringsContainer.length; i++) {
    if (i == stringsContainer.length) i = 0;
    await sleep(2000);
    write(stringsContainer[i].textContent);
    await sleep(2000);
    erase();
  }
})();

console.log("wowo");
