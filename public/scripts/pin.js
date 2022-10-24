/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewPinnedFreet(fields) {
    fetch('/api/pinned')
        .then(showResponse)
        .catch(showResponse);
}

function pinFreet(fields) {
    fetch(`/api/pinned/${fields.freetId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
function unpinFreet(fields) {
    fetch(`/api/pinned`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
