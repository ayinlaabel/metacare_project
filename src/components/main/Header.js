import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="top__nav">
          <div className="search">
            <div className="search__box">
              <input type="text" placeholder="Ask us any question" />
              <i className="icon">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z"
                    stroke="#A3A3C2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.375 18.375L14.5687 14.5687"
                    stroke="#A3A3C2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </div>
          </div>
          <div className="user">
            <div className="user__box">
              <div className="notification">
                <i className="notification__icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.235 3.48071C11.102 2.36502 10.1525 1.5 9.00098 1.5C7.84947 1.5 6.9 2.36502 6.76693 3.48071C4.88993 4.3316 3.58431 6.22166 3.58431 8.41667V12.1799L2.33144 14.662C2.07964 15.1609 2.4422 15.75 3.00098 15.75H6.87901C7.18788 16.6239 8.02131 17.25 9.00098 17.25C9.98064 17.25 10.8141 16.6239 11.1229 15.75H15.001C15.5598 15.75 15.9223 15.1609 15.6705 14.662L14.4176 12.1799V8.41667C14.4176 6.22166 13.112 4.3316 11.235 3.48071ZM12.9981 12.6964L13.7823 14.25H4.21967L5.00385 12.6964C5.05675 12.5916 5.08431 12.4759 5.08431 12.3585V8.41667C5.08431 6.25355 6.83786 4.5 9.00098 4.5C11.1641 4.5 12.9176 6.25355 12.9176 8.41667V12.3585C12.9176 12.4759 12.9452 12.5916 12.9981 12.6964Z"
                      fill="#A3A3C2"
                    />
                  </svg>
                </i>
                <div className="notification__counter">
                  <div className="counter__container">3</div>
                </div>
              </div>
              <div className="profile">
                <div className="profile__box">
                  <div className="profile__img"></div>
                  <i>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 9.05719L10.8619 6.19526C11.1223 5.93491 11.5444 5.93491 11.8047 6.19526C12.0651 6.45561 12.0651 6.87772 11.8047 7.13807L8.4714 10.4714C8.21105 10.7318 7.78895 10.7318 7.5286 10.4714L4.19526 7.13807C3.93491 6.87772 3.93491 6.45561 4.19526 6.19526C4.45561 5.93491 4.87772 5.93491 5.13807 6.19526L8 9.05719Z"
                        fill="#696D8C"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation border__bottom">
        <ul className="nav__listing">
          <li className="nav__item active">
            <a href="#!!" className="nav__link">
              Efficiency
            </a>
          </li>
          <li className="nav__item">
            <a href="#!!" className="nav__link">
              Volume
            </a>
          </li>
          <li className="nav__item">
            <a href="#!!" className="nav__link">
              Customer Satification
            </a>
          </li>
          <li className="nav__item">
            <a href="#!!" className="nav__link">
              Backlog
            </a>
          </li>
        </ul>
      </div>
      <div className="dashboard__header">
        <div className="dashboard__title">
          <h2>Efficiency Analytics</h2>
        </div>
        <div className="dashboard__search">
          <div className="dashboard__search-box">
            <i className="icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="#A3A3C2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 14L11.1 11.1"
                  stroke="#A3A3C2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="fe">
          <div className="filter">
            <select name="" id="">
              <option value="">Filter Option</option>
            </select>
          </div>
          <div className="button">Export</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
