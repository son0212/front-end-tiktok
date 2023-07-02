import Header from './Header/Header';
import ElementRight from './Right/ElementRight';
import ElementLeft from './Left/ElementLeft';

import './index.scss';

function Default({ children }) {
  return (
    <>
      <Header />
      <div className="wrap-index-element container">
        <ElementLeft />
        <ElementRight />
      </div>
      {children}
    </>
  );
}

export default Default;
