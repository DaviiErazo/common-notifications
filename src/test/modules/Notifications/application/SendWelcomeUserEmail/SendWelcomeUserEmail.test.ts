import SendWelcomeUserEmail from "../../../../../modules/Notifications/application/SendWelcomeUserEmail/SendWelcomeUserEmail";
import { SendWelcomeUserEmailCommandHandler } from "../../../../../modules/Notifications/application/SendWelcomeUserEmail/SendWelcomeUserEmailCommandHandler";
import EmailSenderMock from "../../__mocks__/EmailSenderMock";
import { SendWelcomeUserEmailCommandMother } from "./SendWelcomeUserEmailCommandMother";

let handler: SendWelcomeUserEmailCommandHandler;
let notificationsServices: EmailSenderMock;

beforeEach(() => {
    notificationsServices = new EmailSenderMock();
    const sendWelcomeUserEmail = new SendWelcomeUserEmail(notificationsServices);
    handler = new SendWelcomeUserEmailCommandHandler(sendWelcomeUserEmail);
});

describe("SendWelcomeUserEmail", () => {
    it("should a sending notification email", async () => {
        const command = SendWelcomeUserEmailCommandMother.random();
        await handler.handle(command);
    });
})