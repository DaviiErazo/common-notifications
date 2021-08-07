import { NotificationApp } from "./NotificationApp";

try {
    new NotificationApp().start();
} catch (error) {
    console.log(error);
    process.exit(1);
}

process.on("uncaughtException", (error) => {
    console.log("uncaughtException", error);
    process.exit(1);
})