async function submitform() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const rating = document.getElementById("rating").value;

  try {
    const feedback = await fetch("http://localhost:5500/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, message, rating }),
    });

    if (!feedback.ok) {
      console.error(error);
    }

    alert("Thank You!");
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("send").addEventListener("click", (e) => {
  e.preventDefault();
  submitform();
});
