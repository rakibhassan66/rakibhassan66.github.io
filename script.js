document.addEventListener("DOMContentLoaded", () => {
    function showCyberSolutionDetails() {
        document.getElementById('cyberSolutionModal').style.display = 'block';
    }

    function showSoftwareDevelopmentDetails() {
        document.getElementById('softwareDevelopmentModal').style.display = 'block';
    }

    function showWebPenTesterDetails() {
        document.getElementById('webPenTesterModal').style.display = 'block';
    }

    window.showCyberSolutionDetails = showCyberSolutionDetails;
    window.showSoftwareDevelopmentDetails = showSoftwareDevelopmentDetails;
    window.showWebPenTesterDetails = showWebPenTesterDetails;
});
