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

// JavaScript to handle optional smooth scrolling on button click (if needed)
document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.querySelector('.testimonial-cards');

  let startX;

  cardsContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX; 
  });

  cardsContainer.addEventListener('touchmove', (e) => {
      const endX = e.touches[0].clientX; 
      const diffX = startX - endX; 
      cardsContainer.scrollLeft += diffX;
      startX = endX; 
  });
});

  
