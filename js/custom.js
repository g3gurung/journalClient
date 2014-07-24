$(document).on("click", "ul.nav li", function() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse').collapse('hide');
    }
});

var adminFile = null;

function setFile(ele) {
    if (ele.files[0].type.search("pdf") > -1) {
        adminFile = ele.files[0];
    } else {
        ele.value = "";
        alert("Invalid file type!");
    }
    return true;
}

function uploadFile() {
    if ($('#title').val() !== "" && $('#authorName').val() !== ""
            && $('#pdfFile').val() !== "") {
        var fd = new FormData();

        fd.append("approvedFile", adminFile);
        fd.append("title", $('#title').val());
        fd.append("authorName", $('#authorName').val());

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.open("POST", "/adminUpload");

        xhr.send(fd);

        function uploadComplete(evt) {
            /* This event is raised when the server send back a response */
            alert("Successfully Uploaded!");
            $('#title').val(""); 
            $('#authorName').val("");
            $('#pdfFile').val("");
        }
        function uploadFailed(evt) {
            alert("There was an error attempting to upload the file.");
        }
    }
    else {
        alert("Some fields are missing!");
    }
}

function logOut(){
    alert("To succesefully Log Out, please close the browser with all opened tabs or restart the browser!");
    return true;
};