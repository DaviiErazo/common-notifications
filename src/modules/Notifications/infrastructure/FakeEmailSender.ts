import { EmailSender } from '../domain/EmailSender';
import { Email } from '../domain/Email';

export default class FakeEmailSender implements EmailSender {
  async send(email: Email): Promise<void> {
    console.log("============================================");
    console.log(`[Sending Email] -> to = ${email.to}`);
    console.log("============================================");
  }
}
