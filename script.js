function generatePDF() {

    document.getElementById("c_type").innerText =
        document.getElementById("type").value;

    document.getElementById("c_no").innerText =
        "No: " + document.getElementById("no").value;

    document.getElementById("c_topic").innerText =
        document.getElementById("topic").value;

    document.getElementById("c_by").innerText =
        document.getElementById("by").value;

    document.getElementById("c_to").innerText =
        document.getElementById("to").value;

    let element = document.getElementById("cover");
    element.style.display = "block";

    html2pdf().from(element).save().then(() => {
        element.style.display = "none";
    });
}
