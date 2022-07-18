import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import TOP_MENU_LIST from './TopMenuData';
import NAV_LIST from './NavData';

import './Main.css';

function Main() {
  const [categoryVisible, setCategoryVisible] = useState(true);

  return (
    <div id='main'>
      <div id='mainWrap'>
        <header>
          <div id='topMenuWrap'>
            <ul id='topMenu'>
              {TOP_MENU_LIST.map((data, index) => {
                return (
                  <li key={data.id} className='topMenuContent'>
                    <Link to={data.movePath}>{data.topMenu}</Link>
                    {!(index === TOP_MENU_LIST.length - 1) && (
                      <div className='txtBar' />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div id='headerImgBox'>
            <img id='headerImg' alt='myImg' src='/images/headerImg.png' />
          </div>
        </header>
        <div id='mainText'>
          <nav id='sideBar'>
            <div id='sideBarOne'>
              <img id='myImg' alt='myImg' src='/images/myImg.png' />
              <div id='sideBarOneContent'>
                <span id='myName'>younghyun(Black)</span>
                <span id='myJob'>FrontDev</span>
                <span id='profile'>프로필</span>
                <div id='addMan'>
                  <span id='addManContent'>이웃추가</span>
                </div>
              </div>
            </div>
            <div id='sideBarTwo'>
              <div id='navData'>
                <div
                  id='category'
                  onClick={() => {
                    setCategoryVisible(!categoryVisible);
                  }}
                >
                  category
                </div>
                {categoryVisible && (
                  <ul>
                    {NAV_LIST.map((navData) => {
                      return (
                        <li key={navData.id} className='navDataContent'>
                          <img
                            className='menuArrow'
                            alt='menuArrow'
                            src='/images/arrow.png'
                          />
                          <span>{navData.navMenu}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            <div id='searchBox'>
              <input placeholder='검색' id='search' />
              <img id='searchIcon' alt='searchIcon' src='/images/search.png' />
            </div>
          </nav>
          <div id='list'>
            <article>
              <section id='listTop'>
                <div id='listTopWrap'>
                  <div id='listTopOne'>
                    <div>Dev</div>
                    <div>목록</div>
                  </div>
                  <div id='listTopTwo'>
                    <div>글 제목</div>
                    <div>작성일</div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
