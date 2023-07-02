import ActionViewer from './ActionViewr';
import Video from './Video';

import './ElementRight.scss';

function ElementRight() {
  return (
    <div style={{ marginTop: '60px' }}>
      <div className="element-right">
        <div className="wrap-list-video">
          <div className="item-video">
            {/* replace tag link here */}
            <div className="avatar-user">
              <div className="div-avatar-user">
                <span>
                  <img src="/img-user-upload/avatar03.jpeg" alt="name-user" />
                </span>
              </div>
            </div>
            <div className="infor-video">
              <div className="name-and-cap">
                <div className="infor-user">
                  {/* replace tag link here */}
                  <div>
                    <h3 className="id-user">06082013krj</h3>
                    <h4 className="name-user">Hoài Thu (肖莫嫣)🏀</h4>
                    <span>.</span>
                    1-16
                  </div>
                </div>
                <div className="father-cap-and-hashtag">
                  <div className="cap-and-hashtag">
                    <div>
                      <span>I Love You</span>
                      {/* replace tag link here ==> link for hashtag */}
                      <div className="link-hashtag">#hocmoingay</div>
                      <span> </span>
                      <div className="link-hashtag">#xuhuong</div>
                      <span> </span>
                      <div className="link-hashtag">#trending</div>
                    </div>
                  </div>
                </div>
                <h4 className="background-music">
                  {/* replace tag link here */}
                  <div className="link-music-background">
                    <img alt="music" src="/logos/music-background.png" />
                    无敌小可爱 - 叶雨岑
                  </div>
                </h4>
              </div>
              <div className="display-and-func-video">
                <Video />
                <ActionViewer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementRight;
