import { Command } from "../../../Shared/domain/Command";

type SendWelcomeUserEmailCommandProps = {
    from: string;
    to: string;
    subject: string;
    body: string;
}

export class SendWelcomeUserEmailCommand extends Command {
    from: string;
    to: string;
    subject: string;
    body: string;

    constructor(props: SendWelcomeUserEmailCommandProps) {
        super();
        this.from = props.from;
        this.to = props.to;
        this.subject = props.subject;
        this.body = props.body;
    }
}