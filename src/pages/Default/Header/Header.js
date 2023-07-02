import './Header.scss';
import SearchBar from '../../../components/SearchBar';

function Header() {
  return (
    <div className="father-of-header">
      <div className="header">
        <h1 className="logo">
          <img alt="Home" title="Home" src="/logos/logo.jfif" />
          TIKTOK
        </h1>
        <SearchBar />
        <div className="func-remain">
          <div className="upload">
            {/* wrap link here */}
            <div>
              <img alt="Upload" title="Upload" src="/logos/plus.png" />
              <span>Tải lên</span>
            </div>
          </div>
          <div className="messenger">
            {/* wrap link here */}
            <img alt="Tin nhắn" tilte="Tin nhắn" src="/logos/messenger.png" />
          </div>
          <div className="mail-box">
            <img alt="Hòm thư" title="Hòm thư" src="/logos/mail-box.png" />
          </div>
          <div className="avatar"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
