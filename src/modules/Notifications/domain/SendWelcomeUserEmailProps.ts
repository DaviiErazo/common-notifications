import { EmailAddress } from "./EmailAddress"

export type SendWelcomeUserEmailProps = {
    from: EmailAddress;
    to: EmailAddress;
    subject: string;
    body: string;
}