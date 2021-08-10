import { Email } from "../../../../modules/Notifications/domain/Email";
import { EmailAddress } from "../../../../modules/Notifications/domain/EmailAddress";
import { WelcomeUserEmail } from "../../../../modules/Notifications/domain/WelcomeUserEmail";

describe("Email", () => {
    it("should compare same WelcomeUserEmail instances successfully", () => {
        const validEmail = "dssdad@gmail.com";
        const validEmailInstance = EmailAddress.create(validEmail);

        const validEmailProps = {
            from: validEmailInstance,
            to: validEmailInstance,
            subject: "string",
            body: "string",
        }

        const email = new WelcomeUserEmail(validEmailProps);
        const otherEmail = new WelcomeUserEmail(validEmailProps);

        expect(email).toBeInstanceOf(Email);
        expect(email.equals(otherEmail)).toBe(true);

    });
});
