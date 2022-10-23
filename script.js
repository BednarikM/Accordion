const parents = document.querySelectorAll(".accordion");


parents.forEach((parent) => {
  parent.addEventListener("click", () => {
    const targetChild = parent.querySelector(".hidden-box")

    if (targetChild.style.maxHeight) {
      targetChild.style.maxHeight = null;
    } else {
      targetChild.style.maxHeight = targetChild.scrollHeight + "px";
    }


    // if (targetChild.style.display === "grid") {
    //   targetChild.style.display = "none";
    //   targetChild.classList.remove(".visible")

    // } else {
    //   targetChild.style.display = "grid"
    //   targetChild.classList.add(".visible")
    // };

  })
})


