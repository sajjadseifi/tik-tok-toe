import * as React from "react";

export const useHook = (Context, hookName, providerName) => {
  const context = React.useContext(Context)
  if (context === undefined)
    throw new Error(`${hookName} must be used within a ${providerName}`)

  return (cb) => cb(context)
}
export const useDispatch = (Context, hookName, providerName) =>
  useHook(Context, hookName, providerName)((context) => context.dispatch)

export const useSelector = (Context, hookName, providerName, cb = (state) => state) =>
  useHook(Context, hookName, providerName)((context) => cb(context.state))