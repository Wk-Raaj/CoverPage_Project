function generatePDF() {
    const type = document.getElementById("type").value;
    const no = document.getElementById("no").value;
    const topic = document.getElementById("topic").value;
    const by = document.getElementById("by").value;
    const to = document.getElementById("to").value;

    let content = `
        <div style="text-align: center; font-family: Arial;">
            <h1>${type}</h1>
            <h3>No. : ${no}</h3>
            <h3>Topic : ${topic}</h3>
            <h4>Submitted By : ${by}</h4>
            <h4>Submitted To : ${to}</h4>
        </div>
    `;

    let element = document.createElement("div");
    element.innerHTML = content;

    var opt = {
      margin:       0.5,
      filename:     `Cover-${type}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}
