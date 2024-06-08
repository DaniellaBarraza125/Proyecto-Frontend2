import React, { useEffect } from "react";
import {  Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import "./SideBar.scss";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const items = [
    {
      label: (
        <div id="logout"
                onClick={() => {
                  dispatch(logout());
                }}
                className="iconsDiv"
              >
                <Link to="/login">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      d="M16 6.07026C18.3912 7.45349 20 10.0389 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 10.0389 5.60879 7.45349 8 6.07026M12 3V13"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </Link>
              </div>

      ),
      key: '0',
    },
    
  ];
  return (
    <div className="iconsBarContainer">
      <div id="iconsBarDiv">
        <div className="iconsBar">
          <div id="home" className="iconsDiv"><Link to="/users">
      
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="svg w-6 h-6 text-gray-800 dark:text-white"
              >
                <path
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
              </Link>
          </div>
          <div id="discover" className="iconsDiv">      <Link to="/">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="svg w-6 h-6 text-gray-800 dark:text-white"
            >
              <path
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="currentColor"
              ></path>
            </svg>
            </Link>
          </div>

          {user ? (
            <>

<div><Link to="/createPost">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11H11V8Z" fill="#0F0F0F"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#0F0F0F"></path>
                  </svg>
              </Link>
            </div>
            
            <div>
              <Link to="/following">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
              </Link>
            </div>
              
              <Dropdown menu={{      items}}>
                <span onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div id="profileMenu" className="iconsDiv">
                      <Link to="/profile">
                      <img className="profileImg" src={"http://localhost:8080/public/users/"+ user.profilePic} alt="profilePic" />
                    </Link>
                  </div>
                  </Space>
              </span>
            </Dropdown>
              
            </>
          ) : (
            <>
              <div id="profileDiv" className="iconsDiv">
                <Link to="/register">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    {" "}
                    <path
                      d="M7 20C7 17.2386 9.23858 15 12 15C14.7614 15 17 17.2386 17 20M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20ZM14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div div id="loginDiv" className="iconsDiv">
                <Link to="/login">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="svg w-6 h-6 text-gray-800 dark:text-white"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.0724 4.02447C15.1063 3.04182 13.7429 2.5 12.152 2.5C10.5611 2.5 9.19773 3.04182 8.23167 4.02447C7.26636 5.00636 6.73644 6.38891 6.73644 8C6.73644 10.169 7.68081 11.567 8.8496 12.4062C9.07675 12.5692 9.3115 12.7107 9.54832 12.8327C8.24215 13.1916 7.18158 13.8173 6.31809 14.5934C4.95272 15.8205 4.10647 17.3993 3.53633 18.813C3.43305 19.0691 3.55693 19.3604 3.81304 19.4637C4.06914 19.567 4.36047 19.4431 4.46375 19.187C5.00642 17.8414 5.78146 16.4202 6.98653 15.3371C8.1795 14.265 9.82009 13.5 12.152 13.5C14.332 13.5 15.9058 14.1685 17.074 15.1279C18.252 16.0953 19.0453 17.3816 19.6137 18.6532C19.9929 19.5016 19.3274 20.5 18.2827 20.5H6.74488C6.46874 20.5 6.24488 20.7239 6.24488 21C6.24488 21.2761 6.46874 21.5 6.74488 21.5H18.2827C19.9348 21.5 21.2479 19.8588 20.5267 18.2452C19.9232 16.8952 19.0504 15.4569 17.7087 14.3551C16.9123 13.7011 15.9603 13.1737 14.8203 12.8507C15.43 12.5136 15.9312 12.0662 16.33 11.5591C17.1929 10.462 17.5676 9.10016 17.5676 8C17.5676 6.38891 17.0377 5.00636 16.0724 4.02447ZM15.3593 4.72553C16.1144 5.49364 16.5676 6.61109 16.5676 8C16.5676 8.89984 16.2541 10.038 15.544 10.9409C14.8475 11.8265 13.7607 12.5 12.152 12.5C11.5014 12.5 10.3789 12.2731 9.43284 11.5938C8.51251 10.933 7.73644 9.83102 7.73644 8C7.73644 6.61109 8.18963 5.49364 8.94477 4.72553C9.69916 3.95818 10.7935 3.5 12.152 3.5C13.5105 3.5 14.6049 3.95818 15.3593 4.72553Z"
                      fill="#000000"
                      strokeWidth="1"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      stroke="currentColor"
                    ></path>{" "}
                  </svg>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
