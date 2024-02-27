/**
 * Action configuration settings
 *
 * @property actionType - Action type. Defaults to `custom`.
 * @property transactional - Whether the action when running the `run` function should be run in a transaction. Defaults to `true` for model actions, and `false` for global actions.
 * @property timeoutMS - The timeout in milliseconds for the action. Defaults to 3 minutes (180000).
 * @property returnType - Whether the action should return the result of the `run` function. Defaults to `false` for model actions and `true` for global actions.
 */
export interface ActionOptions {
    actionType?: "create" | "update" | "delete" | "custom";
    transactional?: boolean;
    timeoutMS?: number;
    returnType?: boolean;
  }
  