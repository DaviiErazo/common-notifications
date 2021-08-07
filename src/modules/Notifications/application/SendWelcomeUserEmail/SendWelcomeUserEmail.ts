import { EmailSender } from "../../domain/EmailSender";
import { WelcomeUserEmail } from "../../domain/WelcomeUserEmail";
import { WelcomeUserEmailError } from "../../domain/WelcomeUserEmailError";
import { SendWelcomeUserEmailProps } from "../../domain/SendWelcomeUserEmailProps";

export default class SendWelcomeUserEmail {
    constructor(private emailSender: EmailSender) { }

    async run(email: SendWelcomeUserEmailProps): Promise<void> {
        const welcomeUserEmail = new WelcomeUserEmail(email);

        try {
            await this.emailSender.send(welcomeUserEmail);
        } catch (error) {
            throw new WelcomeUserEmailError(email.to);
        }
    }
}