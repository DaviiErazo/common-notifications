import { Router, Request, Response } from "express";
import StatusController from "../Notification/controllers/StatusGetController";
import container from '../dependency-injection';

export const register = (router: Router) => {
    const controller: StatusController = container.get('Notification.controllers.StatusGetController');
    router.get("/email/status", (req: Request, res: Response) => controller.run(req, res));
}