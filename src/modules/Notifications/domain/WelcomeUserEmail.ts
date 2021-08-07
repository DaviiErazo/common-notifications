import { Email } from "./Email";
import { SendWelcomeUserEmailProps } from "./SendWelcomeUserEmailProps";

export class WelcomeUserEmail extends Email {
    constructor(props: SendWelcomeUserEmailProps) {
        super({
            from: props.from,
            to: props.to,
            subject: props.subject,
            body: props.body
        })
    }
}