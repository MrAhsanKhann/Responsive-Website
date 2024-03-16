
// Function to open the popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Event listener for the Join button
document.getElementById("joinButton").addEventListener("click", function() {
    openPopup();
});

// Event listener for closing the popup when clicking outside of it
window.addEventListener("click", function(event) {
    var popup = document.getElementById("popup");
    if (event.target == popup) {
        closePopup();
    }
});