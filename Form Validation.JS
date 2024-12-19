      const form = document.getElementById('myForm');
      const nameInput = document.getElementById('name');
      const errorMessage = document.getElementById('error-message');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameValue = nameInput.value.trim();
        if (!nameValue) {
          errorMessage.textContent = 'Name cannot be empty!';
        } else if (nameValue.length < 3) {
          errorMessage.textContent = 'Name must be at least 3 characters long!';
        } else {
          errorMessage.textContent = '';
          document.getElementById("result").innerText = "Submitted successfully!";
          form.reset();
        }
      });
    