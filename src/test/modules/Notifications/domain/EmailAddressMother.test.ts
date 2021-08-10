import { InvalidArgumentError } from "../../../../modules/Shared/domain/value-object/InvalidArgumentError";
import { EmailAddress } from "../../../../modules/Notifications/domain/EmailAddress";

describe("EmailAddress", () => {
  it("throws error with an invalid email", () => {
    let exception;
    const invalidEmail = "dssdad@dd";

    try {
      EmailAddress.create(invalidEmail);
    } catch (error) {
      exception = error;
    }

    expect(exception).toBeInstanceOf(InvalidArgumentError);
    expect(exception.message).toBe(`The email <${invalidEmail}> is invalid`);
  });

  it("throws error with a null email", () => {
    let exception;
    const invalidEmail = null;

    try {
      EmailAddress.create(invalidEmail);
    } catch (error) {
      exception = error;
    }

    expect(exception).toBeInstanceOf(InvalidArgumentError);
    expect(exception.message).toBe(`The email <${invalidEmail}> is invalid`);
  });

  it("should return EmailAddress", async () => {
    const email = "da.erazom@gmail.com";
    const emailAddress = EmailAddress.create(email);

    expect(emailAddress).toBeInstanceOf(EmailAddress);
    expect(emailAddress.value).toBe(email);
  });

});
