const form = document.getElementById("careerForm");
const resultBox = document.getElementById("result");
const careerText = document.getElementById("career");
const descText = document.getElementById("desc");
const roadmapLink = document.getElementById("roadmap");

const BACKEND_URL = "https://c58db967-bd98-4190-8454-d1e28d2d8c50-00-z75glrp33pk0.sisko.replit.dev/recommend";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

 
  const answers = Array.from(document.querySelectorAll('input[name="answer"]:checked')).map(el => el.value);

  
  if (answers.length === 0) {
    alert("Please select at least one interest.");
    return; // ❌ Stop if nothing is selected
  }

  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers })
  });

 
  const data = await response.json();
  careerText.textContent = data.career;
  descText.textContent = data.description;
  roadmapLink.href = data.roadmap;
  roadmapLink.textContent = "Explore the Roadmap";

  resultBox.classList.remove("hidden");
});
