document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Perform form validation or other tasks
        if (name && email && message) {
            // Submit the form data using fetch or XMLHttpRequest
            fetch('contact_form.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                alert('Message sent successfully!');
                form.reset(); // Reset the form after successful submission
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to send message.');
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
});
