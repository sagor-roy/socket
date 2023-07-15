import React from 'react'

function ActiveUser({ user, selectUser }) {

  const userIdSelectHandler = (userInfo) => {
    selectUser(userInfo)
  }

  return (
    <>
      {user.map((item, index) => (
        <div className="msg" key={index} onClick={() => userIdSelectHandler({ id: item.id, name: item.name })}>
          <img className="msg-profile" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="user" />
          <div className="msg-detail">
            <div className="msg-username">{item.name}</div>
            {/* <div className="msg-content">
              <span className="msg-message">Adaptogen taiyaki austin jean shorts brunch</span>
            </div> */}
            <div className="date-status">
              <span className="msg-date">20m</span>
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default ActiveUser