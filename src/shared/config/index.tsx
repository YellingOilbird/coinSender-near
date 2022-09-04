
/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */

const getEnvVar = (key: string) => {
   if (process.env[key] === undefined) {
      throw new Error(`Env variable ${key} is required`);
   }
   return process.env[key] || "";
};

export const CONTRACT_ID = getEnvVar("REACT_APP_CONTRACT_ID");
export const ENVIRONTMENT = getEnvVar("REACT_APP_ENVIRONTMENT");

export const NODE_ENV = getEnvVar("NODE_ENV");

export const isDevEnv = NODE_ENV === "development";

export const isProdEnv = NODE_ENV === "production";