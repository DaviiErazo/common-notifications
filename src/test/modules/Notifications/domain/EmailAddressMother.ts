import { EmailAddress } from "../../../../modules/Notifications/domain/EmailAddress";
import { EmailMother } from "../../Shared/domain/EmailMother";

export class EmailAddressMother {
  static create(value: string): EmailAddress {
    return EmailAddress.create(value);
  }

  static random(): EmailAddress {
    return this.create(EmailMother.random());
  }
}
