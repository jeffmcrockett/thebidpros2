import { handleResponse, handleError } from "./apiFunctions";

const url = "";

export function getEvents() {
    return fetch(url).then(handleResponse).catch(handleError);
}

export function getItems() {
    return fetch(url).then(handleResponse).catch(handleError);
}

export function postEvent(event) {
    return fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(event),
    })
        .then(handleResponse).catch(handleError);
}

export function postItem(item) {
    return fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(item),
    })
        .then(handleResponse).catch(handleError);
}

/* ! Need to add functionality for updating an item ! */

export function deleteItem(itemId) {
    return fetch(url + itemId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}