import { Command } from "../../../../../modules/Shared/domain/Command";
import { CommandHandler } from "../../../../../modules/Shared/domain/CommandHandler";
import { CommandNotRegisteredError } from "../../../../../modules/Shared/domain/CommandNotRegisteredError";
import { CommandHandlersInformation } from "../../../../../modules/Shared/infrastructure/CommandBus/CommandHandlersInformation";
import { InMemoryCommandBus } from "../../../../../modules/Shared/infrastructure/CommandBus/InMemoryCommandBus";

class UnhandledCommand extends Command {
  static COMMAND_NAME = "unhandled.command";
}

class HandledCommand extends Command {
  static COMMAND_NAME = "handled.command";
}

class MyCommandHandler implements CommandHandler<HandledCommand> {
  subscribedTo(): String {
    return HandledCommand.name;
  }

  async handle(command: HandledCommand): Promise<void> {}
}

describe("InMemoryCommandBus", () => {
  it("throws an error if dispatches a command without handler", async () => {
    const unhandledCommand = new UnhandledCommand();
    const commandHandlersInformation = new CommandHandlersInformation([]);
    const commandBus = new InMemoryCommandBus(commandHandlersInformation);

    let exception = null;

    try {
      await commandBus.dispatch(unhandledCommand);
    } catch (error) {
      exception = error;
    }

    expect(exception).toBeInstanceOf(CommandNotRegisteredError);
    expect(exception.message).toBe(`The command <UnhandledCommand> hasn't a command handler associated`);
  });

  it("accepts a command with handler", async () => {
    const handledCommand = new HandledCommand();
    const myCommandHandler = new MyCommandHandler();
    const commandHandlersInformation = new CommandHandlersInformation([myCommandHandler])

    const commandBus = new InMemoryCommandBus(commandHandlersInformation);

    await commandBus.dispatch(handledCommand);
  });
});
