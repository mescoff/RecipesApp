export const logInfo = (logger: string, message: string, object?: any) => {
  if (process.env.NODE_ENV !== "production") {
    var time = new Date().toJSON();
    console.info(`[${time}][${logger}] ${message}`, object? object:'');
  }
};

/**
 * Help point safely to an interface property name
 * Helps facilitate refactoring if interface props are renamed and enforce selection when need to pass property name as value
 * @param name 
 */
export const nameof = <T>(name: Extract<keyof T, string>): string => name;
