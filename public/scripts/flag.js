/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllFlaggedFreets(fields) {
    fetch('/api/flagged')
        .then(showResponse)
        .catch(showResponse);
}

function flagFreet(fields) {
    fetch(`/api/flagged/${fields.freetId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
function unflagFreet(fields) {
    fetch(`/api/flagged/${fields.freetId}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}
