class Logger<T> {
  log(data: T): void {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} , ${JSON.stringify(data)}`);
  }
}

const stringLogger = new Logger<string>();
stringLogger.log("system started");

const userLogger = new Logger<{ id: number; name: string }>();
userLogger.log({ id: 1, name: "Robin" });

// Generic Form State Manager

class FormState<T extends Record<string, any>> {
  private state: T;

  constructor(initialState: T) {
    this.state = initialState;
  }

  public update<K extends keyof T>(key: K, value: T[K]): void {
    this.state[key] = value;
  }

  public getState(): T {
    return this.state;
  }
}

const loginForm = new FormState<{ email: string; password: string }>({
  email: "",
  password: "",
});

loginForm.update("email", "ro@bin.com")
console.log(loginForm.getState());

