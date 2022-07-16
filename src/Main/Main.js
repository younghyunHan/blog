import { Link } from 'react-router-dom';
import TOP_MENU_LIST from './TopMenuData';

import './Main.css';

console.log(TOP_MENU_LIST);

function Main() {
  return (
    <div id='main'>
      <div>
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
      <div></div>
      <div>검색</div>
      <div>메뉴</div>
      <div>
        <div>글 목록</div>
        <div>pagination</div>
      </div>
      <div>
        <div>제목</div>
        <div>이름</div>
        <div>본문</div>
      </div>
      <div>배너</div>
    </div>
  );
}

export default Main;
