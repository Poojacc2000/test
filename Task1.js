console.log("JavaScript file connected successfully.");

document.querySelector('.get-started-btn').addEventListener('click', function() {
    alert('Get Started clicked!');
  });

document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('Redirecting to the application page...');
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");
        const isOpen = answer.style.display === "block";
  
        document.querySelectorAll(".faq-answer").forEach((ans) => (ans.style.display = "none"));
        answer.style.display = isOpen ? "none" : "block";
      });
    });
  });
  