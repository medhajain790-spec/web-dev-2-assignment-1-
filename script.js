const addEventBtn = document.getElementById("addEvent");
const eventList = document.getElementById("eventList");

// Add Event on Button Click
addEventBtn.addEventListener("click", function () {

    // Get input values
    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

    // Validation
    if (title === "" || date === "") {
        alert("Please fill Event Title and Date");
        return;
    }

    // Create Event Card
    const card = document.createElement("div");
    card.className = "event-card";

    // Create elements separately (better DOM practice)
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete-btn";

    const eventTitle = document.createElement("h3");
    eventTitle.innerText = title;

    const eventDate = document.createElement("p");
    eventDate.innerHTML = "<strong>Date:</strong> " + date;

    const eventCategory = document.createElement("p");
    eventCategory.innerHTML = "<strong>Category:</strong> " + category;

    const eventDesc = document.createElement("p");
    eventDesc.innerText = description;

    // Append elements to card
    card.appendChild(deleteBtn);
    card.appendChild(eventTitle);
    card.appendChild(eventDate);
    card.appendChild(eventCategory);
    card.appendChild(eventDesc);

    // Append card to right section
    eventList.appendChild(card);

    // Clear form after submission
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
});


// Event Delegation for Delete
eventList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const card = e.target.parentElement;
        card.remove();
    }
});
const clearAllBtn = document.getElementById("clearAll");

// Clear All Events
clearAllBtn.addEventListener("click", function () {

    if (eventList.children.length === 0) {
        alert("No events to clear!");
        return;
    }

    const confirmClear = confirm("Are you sure you want to delete all events?");

    if (confirmClear) {
        eventList.innerHTML = "";
    }
});
