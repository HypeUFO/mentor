// export const handleUserUpdate = (userName, email, firstName, lastName, phone, address, userId) => {
//     console.log('handleUserUpdate fired with username:', userName)
//   return dispatch => {
//     dispatch(requestDataFromServer())

//     fetch(`/api/users/${userId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         userName,
//         email,
//         firstName,
//         lastName,
//         phone,
//         address,
//         userId
//       }),
//       credentials: 'include'
//     })
//     .then(response => response.json())
//     .then(res => {
//       return dispatch(receiveUserData(res.user))
//     })
//     .then( () => dispatch(receiveData()) )
//   };
// };

// export const handlePasswordUpdate = (oldPassword, password, userId) => {
//   return dispatch => {
//     dispatch(requestDataFromServer())

//     fetch(`/api/users/${userId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         oldPassword,
//         password,
//         userId
//       }),
//       credentials: 'include'
//     })
//     .then(response => response.json())
//     .then(res => {
//       return dispatch(receiveUserData(res.user))
//     })
//     .then( () => dispatch(receiveData()) )
//   };
// };

// const requestDataFromServer = () => ({
//   type: 'REQUEST_DATA'
// })

// const receiveUserData = (user) => ({
//   type: 'RECEIVE_USER_DATA',
//   user
// })

// const receiveData = () => ({
//   type: 'RECEIVE_DATA',
// })

// export const handleSettingsView = view => {
//     const UPDATE_SETTINGS_VIEW = 'UPDATE_SETTINGS_VIEW';
//     return {
//         type: UPDATE_SETTINGS_VIEW,
//         view,
//     }
// }

export const handleTimerStart = time => {
    const UPDATE_START_TIME = 'UPDATE_START_TIME';
    return {
        type: UPDATE_START_TIME,
        time,
    }
}

export const handleTimerStop = time => {
    const UPDATE_STOP_TIME = 'UPDATE_STOP_TIME';
    return {
        type: UPDATE_STOP_TIME,
        time,
    }
}