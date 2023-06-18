// Get all category buttons
var categoryButtons = document.querySelectorAll('.category-btn');

// Add click event listener to each button
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle the active class on the corresponding category list
    const categoryList = button.nextElementSibling;
    categoryList.classList.toggle('active');
    button.classList.toggle('active');
  });
});
