const form = document.querySelector("form");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const ticket = {
        customerName: document.querySelector(
            'input[name="customerName"]'
        ).value,

        email: document.querySelector(
            'input[name="email"]'
        ).value,

        issueTitle: document.querySelector(
            'input[name="issueTitle"]'
        ).value,

        description: document.querySelector(
            'textarea[name="description"]'
        ).value,

        category: document.querySelector(
            'select[name="category"]'
        ).value,

        priority: document.querySelector(
            'select[name="priority"]'
        ).value
    };

    const response = await fetch("/api/tickets", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(ticket)
    });

    const result = await response.json();

    alert(result.message);

    console.log(result);
});
