// Function to generate a random ID
function generateRandomID() {
    return 'ID-' + Math.floor(Math.random() * 1000000);
}

function generatePDF() {
    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactno = document.getElementById("contactno").value;
    const people = document.getElementById("people").value;
    const date = document.getElementById("date").value;
    const bookingID = generateRandomID();  // Generate a unique ID

    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Style and content for the PDF
    doc.setFontSize(18);
    doc.setTextColor(40, 70, 130);
    doc.text("Booking Confirmation", 105, 20, null, null, 'center');  // Center aligned title

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);  // Reset color for details

    // Add booking details
    doc.text(`Booking ID: ${bookingID}`, 20, 40);
    doc.text(`Name: ${name}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Contact Number: ${contactno}`, 20, 70);
    doc.text(`Number of People: ${people}`, 20, 80);
    doc.text(`Date: ${date}`, 20, 90);

    // Draw a line separator
    doc.setDrawColor(150, 150, 150); // Set grey color
    doc.line(20, 95, 190, 95);  // Horizontal line

    // Footer or additional information
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Thank you for your booking. Please keep this confirmation for your records.", 20, 110);

    // Save the PDF and prompt for download
    doc.save(`booking_confirmation_${bookingID}.pdf`);
}
