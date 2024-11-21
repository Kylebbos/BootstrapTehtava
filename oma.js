function laheta() {
  const name = document.getElementById("nimi").value;
  const email = document.getElementById("sposti").value;
  const phone = document.getElementById("puh").value;
  const feedback = document.getElementById("palaute").value;
  const radioSelection = document.querySelector(
    'input[name="parasta"]:checked'
  );
  const checkboxSelections = document.querySelectorAll(
    'input[name="lisaa"]:checked'
  );
  const found = document.getElementById("loytyiko").value;

  const radioText = radioSelection ? radioSelection.value : "Not selected";
  const checkboxText =
    Array.from(checkboxSelections)
      .map((checkbox) => checkbox.value)
      .join(", ") || "None";

  const displayText = `
      <h3>Feedback Summary:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Feedback:</strong> ${feedback || "No feedback provided"}</p>
      <p><strong>What you enjoyed:</strong> ${radioText}</p>
      <p><strong>What you’d like to see more of:</strong> ${checkboxText}</p>
      <p><strong>Did you find what you were looking for?</strong> ${found}</p>
      <h3>Thank you for the Feedback ${name}!</h3>
    `;

  document.getElementById("vastaus").innerHTML = displayText;
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offsetTop =
      target.offsetTop - document.querySelector(".navbar").offsetHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
