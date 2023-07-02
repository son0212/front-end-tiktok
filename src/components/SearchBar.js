import clsx from 'clsx';

const SearchBar = (props) => {
  return (
    <>
      <form className={clsx(props.searchBar ? props.searchBar : ['searchBar'])}>
        <input className={clsx(props.input ? props.input : '')} placeholder="Tìm kiếm tài khoản và video" />
        <span className={clsx(props.span ? props.span : '')}></span>
        <button className={clsx(props.button ? props.button : '')}>
          {/* <img
            className={clsx(props.img ? props.img : '')}
            alt="Find user or video"
            title="Find user or video"
            src="/logos/search.png"
          /> */}
          <svg
            className={clsx(props.img ? props.img : '')}
            alt="Find user or video"
            title="Find user or video"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width={256}
            height={256}
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <defs></defs>
            <g
              style={{
                stroke: 'none',
                strokeWidth: 0,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: 'none',
                fillRule: 'nonzero',
                opacity: 1,
              }}
              transform="translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)"
            >
              <path
                d="M 88.535 81.465 L 65.846 58.776 c 10.891 -14.351 9.801 -34.954 -3.288 -48.043 C 55.638 3.812 46.435 0 36.646 0 c -9.789 0 -18.992 3.812 -25.913 10.733 S 0 26.857 0 36.646 c 0 9.788 3.812 18.991 10.733 25.912 c 7.144 7.145 16.528 10.717 25.913 10.717 c 7.808 0 15.612 -2.482 22.13 -7.429 l 22.689 22.689 C 82.44 89.512 83.721 90 85 90 s 2.56 -0.488 3.535 -1.465 C 90.488 86.583 90.488 83.417 88.535 81.465 z M 17.805 55.488 C 12.771 50.455 10 43.764 10 36.646 c 0 -7.118 2.771 -13.809 7.805 -18.842 C 22.837 12.771 29.529 10 36.646 10 c 7.117 0 13.809 2.771 18.842 7.805 c 10.389 10.389 10.389 27.294 0 37.684 C 45.098 65.878 28.193 65.876 17.805 55.488 z"
                style={{
                  stroke: 'none',
                  strokeWidth: 1,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 10,
                  fill: props.color ? props.color : 'black',
                  fillRule: 'nonzero',
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
            </g>
          </svg>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
