export default function () {
    const sendMail = async ({ to, subject, text, html, attachment }: { to: string, subject: string, text: string, html?: string, attachment?: string }) => {
        const mailStatus = await $fetch("/api/send-mail", {
            method: "POST",
            body: {
                to,
                subject,
                text,
                html,
                attachment,
            },
        });
        return mailStatus
    }
    return { sendMail }
}