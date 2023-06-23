//Generating the rising items

class risingItem {
  constructor(
    height = 15,
    leftPosition,
    animationDuration = 15,
    animationDelay = 0
  ) {
    this.height = height;
    this.leftPosition = leftPosition;
    this.animationDuration = animationDuration;
    this.animationDelay = animationDelay;
  }
  addToPage() {
    let item = document.createElement("li");
    let colorClassAray = ["pink", "blue", "green", "red", "purple"];
    let randomColor =
      colorClassAray[Math.floor(Math.random() * colorClassAray.length)];
    item.classList.add("ray");
    item.classList.add(randomColor);
    item.style.height = this.height + "px";
    item.style.bottom = "-" + (this.height + 10) + "px";
    item.style.left = this.leftPosition + "%";
    item.style.animationDuration = this.animationDuration + "s";
    item.style.animationDelay = this.animationDelay + "s";
    let itemList = document.querySelector("#container");
    itemList.appendChild(item);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function multipleObjects(numberOfObject) {
  for (let i = 0; i < numberOfObject; i++) {
    let height = getRandomInt(6, 200);
    let leftPosition = getRandomInt(-100, 100);
    let animationDuration = getRandomInt(5, 30);
    let animationDelay = getRandomInt(0, 10);
    new risingItem(
      height,
      leftPosition,
      animationDuration,
      animationDelay
    ).addToPage();
  }
}

multipleObjects(300);
