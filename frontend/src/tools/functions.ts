export const logInfo = (logger: string, message: string, object?: any) => {
  if (process.env.NODE_ENV !== "production") {
    var time = new Date().toJSON();
    console.info(`[${time}][${logger}] ${message}`, object);
  }
};
