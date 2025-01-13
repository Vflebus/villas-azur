import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const { proMail, sendgridApiUser, sendgridApiKey } = useRuntimeConfig(event)
    const { to, subject, text, html, attachment } = await readBody(event);

    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net', // Remplacez par votre serveur SMTP
        port: 587,
        auth: {
            user: sendgridApiUser,
            pass: sendgridApiKey,
        },
    });

    const attachments = attachment ? [
        {
            filename: 'devis.pdf',
            content: Buffer.from(attachment, 'base64'),
            contentType: 'application/pdf',
        },
    ] : undefined

    const mailOptions = {
        from: `"Villas Azur" <${proMail}>`,
        to,
        subject,
        text,
        html,
        attachments
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
});