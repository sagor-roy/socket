import React from 'react'

function ActiveUser() {
  return (
    <>
      <div className="msg online">
        <img className="msg-profile" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
        <div className="msg-detail">
          <div className="msg-username">Madison Jones</div>
          <div className="msg-content">
            <span className="msg-message">What time was our meet</span>
          </div>
          <div className="date-status">
            <span className="msg-date">20m</span>
            <div className="badge badge-success sm">8</div>
          </div>
        </div>
      </div>
      <div className="msg">
        <img className="msg-profile" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
        <div className="msg-detail">
          <div className="msg-username">Miguel Cohen</div>
          <div className="msg-content">
            <span className="msg-message">Adaptogen taiyaki austin jean shorts brunch</span>
          </div>
          <div className="date-status">
            <span className="msg-date">20m</span>
          </div>
        </div>
      </div>
      <div className="msg active">
        <img className="msg-profile" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="" />
        <div className="msg-detail">
          <div className="msg-username">John Doe</div>
          <div className="msg-content">
            <span className="msg-message">Aysenur: I love CSS</span>
          </div>
          <div className="date-status">
            <span className="msg-date">20m</span>
            <div className="badge badge-success sm">12</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActiveUser