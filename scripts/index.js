//event listener that shows the progress bar after clicking on the start button
document.addEventListener("click", function(event) {
    if (event.target.id === "start-btn") {
        var button = event.target;
        button.style.display = "none";
        var activityContainer = button.closest(".wactivity");
        var activityContainer2 = button.closest(".mactivity");

        if (activityContainer) {
            var loader = activityContainer.querySelector(".loader");
            var progress = activityContainer.querySelector(".progress");
            var completionBtn = activityContainer.querySelector("#completion-btn");

            loader.style.visibility = "visible";
            progress.style.visibility = "visible";
            completionBtn.style.visibility = "visible";

            var progressValue = 0;
            activityContainer.style.setProperty("--progress-value", progressValue + "%");
            progress.innerHTML = progressValue + "%";
            loader.style.setProperty("--progress-value", progressValue + "%");
        }
        else if(activityContainer2){
            var loader = activityContainer2.querySelector(".loader");
            var progress = activityContainer2.querySelector(".progress");
            var completionBtn = activityContainer2.querySelector("#completion-btn");

            loader.style.visibility = "visible";
            progress.style.visibility = "visible";
            completionBtn.style.visibility = "visible";

            var progressValue = 0;
            activityContainer2.style.setProperty("--progress-value", progressValue + "%");
            progress.innerHTML = progressValue + "%";
            loader.style.setProperty("--progress-value", progressValue + "%");
        }
    }
});
function dailyValidate() {
    var inputTitle = document.querySelector("#input-title");
    var inputContent = document.querySelector("#input-content");

    // Check if either input is empty
    if (inputTitle.value === "" && inputContent.value === "") {
        alert("The challenge title and its content cannot be empty.");
    } else if (inputTitle.value === "") {
        alert("The challenge title cannot be empty.");
    } else if (inputContent.value === "") {
        alert("The challenge content cannot be empty.");
    }
}
function weeklyMonthlyValidate(){
    var input = document.querySelector("#custom-activity");
    if(input.value === ""){
        alert("The challenge content can not be ampty")
    }
}