import { Request, Response } from "express";
import httpStatus from "http-status";
import { SendWelcomeUserEmailCommand } from "../../modules/Notifications/application/SendWelcomeUserEmail/SendWelcomeUserEmailCommand";
import { WelcomeUserEmailError } from "../../modules/Notifications/domain/WelcomeUserEmailError";
import { CommandBus } from "../../modules/Shared/domain/CommandBus";
import { Controller } from "./Controller";

export class SendWelcomeUserEmailController implements Controller {
    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        const { from, to, subject, body } = req.body;
        
        const sendWelcomeUserEmailCommand = new SendWelcomeUserEmailCommand({ from, to, subject, body });

        try {
            await this.commandBus.dispatch(sendWelcomeUserEmailCommand);
            res.status(httpStatus.OK).send();
        } catch (error) {
            if (error instanceof WelcomeUserEmailError) {
                res.status(httpStatus.BAD_GATEWAY).json(error.message);
            } else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error.message);
            }
        }
    }
}