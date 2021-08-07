import { Request, Response, Router } from "express";
import container from "../dependency-injection";
import { SendWelcomeUserEmailController } from "../Notification/controllers/SendWelcomeUserEmailController";

export const register = (router: Router) => {
    const sendWelcomeUserEmailController: SendWelcomeUserEmailController = container.get("Notification.controllers.SendWelcomeUserEmailController");
    router.post("/email/welcome", (req: Request, res: Response) => sendWelcomeUserEmailController.run(req, res));
}