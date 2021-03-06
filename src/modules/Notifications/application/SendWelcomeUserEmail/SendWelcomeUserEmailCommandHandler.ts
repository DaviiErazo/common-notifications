import { CommandHandler } from "../../../Shared/domain/CommandHandler";
import { EmailAddress } from "../../domain/EmailAddress";
import SendWelcomeUserEmail from "./SendWelcomeUserEmail";
import { SendWelcomeUserEmailCommand } from "./SendWelcomeUserEmailCommand";


export class SendWelcomeUserEmailCommandHandler implements CommandHandler<SendWelcomeUserEmailCommand> {
    constructor(private sendWelcomeUserEmail: SendWelcomeUserEmail) { }

    subscribedTo(): string {
        return SendWelcomeUserEmailCommand.name;
    }

    async handle(command: SendWelcomeUserEmailCommand): Promise<void> {
        const from = EmailAddress.create(command.from);
        const to = EmailAddress.create(command.to);
        const subject = command.subject;
        const body = command.body;

        await this.sendWelcomeUserEmail.run({ from, to, subject, body });
    }
}