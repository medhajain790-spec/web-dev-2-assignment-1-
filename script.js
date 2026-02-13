const addEventBtn = document.getElementById("addEvent");
const eventList = document.getElementById("eventList");

addEventBtn.addEventListener("click", function () {

    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();
    
    if (title === "" || date === "") {
        alert("Please fill Event Title and Date");
        return;
    }

    const card = document.createElement("div");
    card.className = "event-card";

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

    card.appendChild(deleteBtn);
    card.appendChild(eventTitle);
    card.appendChild(eventDate);
    card.appendChild(eventCategory);
    card.appendChild(eventDesc);

    eventList.appendChild(card);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
});

eventList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const card = e.target.parentElement;
        card.remove();
    }
});
const clearAllBtn = document.getElementById("clearAll");

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
