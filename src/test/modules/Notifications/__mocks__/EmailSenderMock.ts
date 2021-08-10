import { Email } from "../../../../modules/Notifications/domain/Email";
import { EmailSender } from "../../../../modules/Notifications/domain/EmailSender";

export default class EmailSenderMock implements EmailSender {
    async send(email: Email) {
        return
    }
}