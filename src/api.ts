import { AppState } from "./AppStateContext"

const REACT_APP_BACKEND_ENDPOING: string = "http://localhost:4000";

export const save = (payload: AppState) => {
  return fetch(`${REACT_APP_BACKEND_ENDPOING}/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      return response.json()
    })
    .catch(console.log)
}

export const load = () => {
  return fetch(`${REACT_APP_BACKEND_ENDPOING}/load`)
    .then((response) => {
      return response.json() as Promise<AppState>
    })
}