import { Email } from "../../../../modules/Notifications/domain/Email";
import { EmailAddress } from "../../../../modules/Notifications/domain/EmailAddress";

describe("Email", () => {
    it("should compare same email instances successfully", () => {
        const validEmail = "dssdad@gmail.com";
        const validEmailInstance = EmailAddress.create(validEmail);

        const validEmailProps = {
            from: validEmailInstance,
            to: validEmailInstance,
            subject: "string",
            body: "string",
        }

        const email = new Email(validEmailProps);
        const otherEmail = new Email(validEmailProps);

        expect(email).toBeInstanceOf(Email);
        expect(email.equals(otherEmail)).toBe(true);
    });
});
