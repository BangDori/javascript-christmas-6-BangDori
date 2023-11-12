const ERROR_PREFIX = '[ERROR] ';

class InputError extends Error {
  constructor(message) {
    super(ERROR_PREFIX + message);
    this.name = this.constructor.name;
  }
}

export default InputError;
