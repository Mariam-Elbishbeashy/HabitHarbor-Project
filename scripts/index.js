//event listener that shows the progress bar after clicking on the start button
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("start-btn")) {
        var button = event.target;
        button.style.display = "none";
        var activityContainer = button.closest(".wactivity");
        var activityContainer2 = button.closest(".mactivity");

        if (activityContainer) {
            var loader = activityContainer.querySelector(".loader");
            var progress = activityContainer.querySelector(".progress");
            loader.style.visibility = "visible";
            progress.style.visibility = "visible";
            var progressValue = 0;
            activityContainer.style.setProperty("--progress-value", progressValue + "%");
            progress.innerHTML = progressValue + "%";
            loader.style.setProperty("--progress-value", progressValue + "%");
        }
        else if(activityContainer2){
            var loader = activityContainer2.querySelector(".loader");
            var progress = activityContainer2.querySelector(".progress");
            loader.style.visibility = "visible";
            progress.style.visibility = "visible";
            var progressValue = 0;
            activityContainer2.style.setProperty("--progress-value", progressValue + "%");
            progress.innerHTML = progressValue + "%";
            loader.style.setProperty("--progress-value", progressValue + "%");
        }
    }
});
