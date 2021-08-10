import { InvalidArgumentError } from "../../Shared/domain/value-object/InvalidArgumentError";
import { StringValueObject } from "../../Shared/domain/value-object/StringValueObject";

export class EmailAddress extends StringValueObject {
    constructor(value: string) {
        super(value);
    }

    private static ensureEmailIsValid(email: string): void {
        if (this.isInvalidEmail(email)) {
            throw new InvalidArgumentError(`The email <${email}> is invalid`);
        }
    }

    private static isInvalidEmail(email: string) {
        var re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email);
    }

    public static create(value: string) {
        this.againstNullOrUndefined('email', value);
        this.ensureEmailIsValid(value);
        return new EmailAddress(value);
    }
};