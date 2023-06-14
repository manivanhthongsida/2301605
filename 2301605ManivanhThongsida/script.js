document.getElementById("review-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var nameInput = document.getElementById("name-input");
    var reviewInput = document.getElementById("review-input");
    var name = nameInput.value.trim();
    var review = reviewInput.value.trim();
  
    if (name !== "" && review !== "") {
      var reviewElement = document.createElement("div");
      reviewElement.classList.add("review");
      reviewElement.innerHTML = "<p><strong>" + name + "</strong>: " + review + "</p>";
  
      var reviewList = document.getElementById("review-list");
      reviewList.appendChild(reviewElement);
  
      nameInput.value = "";
      reviewInput.value = "";
    }
  });