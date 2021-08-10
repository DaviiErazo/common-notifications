import { SendWelcomeUserEmailCommand } from "../../../../../modules/Notifications/application/SendWelcomeUserEmail/SendWelcomeUserEmailCommand";
import { EmailMother } from "../../../Shared/domain/EmailMother";
import { WordMother } from "../../../Shared/domain/WordMother";

export class SendWelcomeUserEmailCommandMother {
    static create(from: string, to: string, subject: string, body: string) {
        return new SendWelcomeUserEmailCommand({ from, to, subject, body })
    }

    static random(): SendWelcomeUserEmailCommand {
        return this.create(
            EmailMother.random(),
            EmailMother.random(),
            WordMother.random(),
            WordMother.random(),
        )
    }
}