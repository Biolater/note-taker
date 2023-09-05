// Selecting elements
const noteInput = $("#note-input");
const btn = $(".btn");
const container = $(".notes");

// Initializing note count
let noteCount = 0;

// Event listener for button click
btn.on("click", container, function () {
    // Increment note count
    noteCount++;
    // Creating HTML for the note
    const noteHtml = `
    <div class="card">
      <div class="card-body">
        <p class="card-title">Note ${noteCount}</p>
        <p class="card-text">${noteInput.val()}</p>
        <button class="btn btn-primary d-block">View Detail</button>
      </div>
      <div class="modal-1">
        <div class="card">
          <div class="card-header">
            <button class="btn-close"></button>
          </div>
          <div class="card-body">
            <p>${noteInput.val()}</p>
          </div>
        </div>
      </div>
    </div>
  `;

    // Appending the HTML to the container
    container.append(noteHtml);

    // Clearing the input field
    noteInput.val("");

    // Adding a class if there are more than one notes
    if (noteCount > 1) {
        container.addClass("grid-2");
    }


});


$(document).ready(function () {
    container.on("click", ".btn-primary", function () {
        // Find the closest parent .card element
        const parentCard = $(this).closest('.card');

        // Find the next .modal-1 element after the parent .card
        const nextModal = parentCard.find('.modal-1');

        // Log the next .modal-1 element
        $(".modal-1").hide();
        nextModal.css("display", "block");
        $(".overlay").show();
        $("body").addClass("overflow-hidden")
        $(nextModal).on('click', ".btn-close", function () {
            nextModal.hide()
            $(".overlay").hide();
            $("body").removeClass("overflow-hidden")
        })
    });
});