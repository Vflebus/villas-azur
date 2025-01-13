import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'fs/promises';

export default defineEventHandler(async (event) => {
    const { name } = await readBody(event);

    // Charger un PDF existant
    const existingPdfBytes = await fs.readFile('./estimateTemplate.pdf');

    // Créer un document PDF à partir du fichier existant
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Modifier la première page (par exemple)
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Ajouter ou remplacer du texte
    firstPage.drawText(`Nom du destinataire : ${name}`, {
        x: 50,
        y: 500,
        size: 20,
        color: rgb(0, 0, 0),
    });

    // Sauvegarder les modifications dans un nouveau fichier PDF
    const pdfBytes = await pdfDoc.save();

    return Buffer.from(pdfBytes).toString("base64");
});