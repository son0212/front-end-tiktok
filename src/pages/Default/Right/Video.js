import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';

import { BackgroundVolume1, BackgroundVolume2, ColorScrollBar } from './StyleRight';
import { useEventContext } from '../../../Context/hooks';

const Video = () => {
  const [state, dispatch] = useEventContext();
  const idVideo = useRef();
  let clickTimer = null;
  const navigate = useNavigate();

  // useEffect được gọi mỗi khi giá trị volume trong state được thay đổi
  useEffect(() => {
    // mức độ âm lượng chỉ tồn tại từ khoảng 0 -> 1 nên ta có giá trị state của âm lượng chia 100
    idVideo.current.volume = state.sizeVolume / 100;
  }, [state.sizeVolume]);

  // ẩn trái tim đi sau mỗi 2 giây state được thay đổi
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'doubleClickVideo' });
    }, 2000);
  }, [state.doubleClickVideo]);

  const handleClickVideo = (e) => {
    // luôn luôn được gọi trong lần đầu tiền click
    if (!clickTimer) {
      clickTimer = setTimeout(() => {
        navigate('/test');
        clearTimeout(clickTimer);
        clickTimer = null;
      }, 500);

      return;
    }
    // click lần thứ hai trong thời gian 200ms thì sẽ nhảy xuống đây
    dispatch({ type: 'like', payload: true });

    clearTimeout(clickTimer);
    clickTimer = null;
    // get tọa độ của sự kiện click và show trái tim
    const { clientX, clientY } = e;
    const { top, left } = idVideo.current.getBoundingClientRect();
    let x = clientX - left - 10;
    let y = clientY - top - 60;
    dispatch({ type: 'checkAnimationPosition', payload: { x: x, y: y } });
    dispatch({ type: 'doubleClickVideo', payload: true });
  };
  const HandleChangeVolume = (e) => {
    const { clientY } = e;
    const y = Math.floor((clientY - e.target.getBoundingClientRect().top) / 1.25);
    console.log('positon unit scroll now:' + y);
    changeAndSaveVolume(y);
    // dispatch({ type: 'onClick-change-volume', payload: y });

    // giảm 2.5 đơn vị âm lượng với mỗi 1 đơn vị vị trí con trượt tăng
    // y là vị trí hiện tại, volumeBefore là giá trị trước đó nên cần tính khoảng cách giữa chúng để tăng giảm âm thanh
    // đặt lại giá trị mới trong state cho con trượt sau khi so sánh xong và kết thúc func
  };

  function HandlePlayVideo() {
    if (state.statusVideo) {
      idVideo.current.pause();
      // setStatusVideo(!statusVideo);
      dispatch({ type: 'statusVideo' });
      return;
    }
    idVideo.current.play();
    dispatch({ type: 'statusVideo' });
  }

  function HandleTurnVolume() {
    if (state.volume) {
      idVideo.current.volume = 0;
      dispatch({ type: 'volume' });
      return;
    }
    idVideo.current.volume = 1;
    dispatch({ type: 'volume' });
  }

  // lấy vị trí ra rồi sau đó thay đổi luôn (state) để có thể trả về giá trị chuẩn nhất
  // so sánh giá trị state vừa mới lưu với giá trị trước đó rồi mới điều chỉnh volume
  // thay đổi giá trị trước đó bằng giá trị mới

  function changeAndSaveVolume(volumeNow) {
    dispatch({ type: 'save-volume-now', payload: volumeNow });
    if (state.volumeNow === 40) {
      dispatch({ type: 'volume', payload: false });
    }
    if (Math.max(state.volumeNow, state.volumeBefore) === state.volumeNow && state.volumeNow !== state.volumeBefore) {
      // giảm 2.5 đơn vị âm lượng với mỗi 1 đơn vị vị trí con trượt tăng
      // y là vị trí hiện tại, volumeBefore là giá trị trước đó nên cần tính khoảng cách giữa chúng để tăng giảm âm thanh
      dispatch({ type: 'decrease-volume', payload: state.volumeNow - state.volumeBefore });
      // đặt lại giá trị mới trong state cho con trượt sau khi so sánh xong và kết thúc func
      dispatch({ type: 'onChange-volume', payload: state.volumeNow });
      return;
    }
    // trường hợp còn lại
    // tăng 2.5 đơn vị âm lượng
    if (state.volumeNow !== state.volumeBefore && state.sizeVolume <= 100) {
      dispatch({ type: 'increase-volume', payload: state.volumeBefore - state.volumeNow });
    }
    // đặt lại giá trị tiếp
    dispatch({ type: 'onChange-volume', payload: state.volumeNow });
  }

  const trackPositon = ({ y }) => {
    changeAndSaveVolume(y);
  };

  return (
    <>
      <div className="display-video">
        <video onClick={handleClickVideo} loop ref={idVideo} alt="01" src="/videos/01.mp4" />
        <div
          className="animated-heart"
          style={{ left: state.positionDoubleClickVideo.x, top: state.positionDoubleClickVideo.y }}
        >
          {state.doubleClickVideo ? (
            <div
              onClick={() => {
                dispatch({ type: 'doubleClickVideo', payload: true });
              }}
              className="father-heart"
            >
              <img
                className={clsx({ ['heart01']: state.doubleClickVideo })}
                src="/logos/heart-in-video.png"
                alt="like01"
              />
              <img
                className={clsx({ ['heart02']: state.doubleClickVideo })}
                src="/logos/heart-in-video.png"
                alt="like02"
              />
              <img
                className={clsx({ ['heart03']: state.doubleClickVideo })}
                src="/logos/heart-in-video.png"
                alt="like03"
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <div
          className={clsx('playpause', state.statusVideo ? ['playVideo'] : ['pauseVideo'])}
          onClick={HandlePlayVideo}
        ></div>
        <div className="volume">
          <div className="father-scrollbar">
            <div className="scrollbar" onClick={HandleChangeVolume}>
              <Draggable
                bounds={{ top: 0, bottom: 40 }}
                // position={{ y: state.volumeNow }}
                defaultPosition={{ x: 0, y: 0 }}
                onDrag={(e, data) => trackPositon(data)}
                axis="y"
              >
                <ColorScrollBar volume={state.volume} />
              </Draggable>
              <BackgroundVolume1 volume={state.volume} amount={state.volumeBefore} />
              <BackgroundVolume2 volume={state.volume} amount={state.volumeBefore} />
            </div>
          </div>
          <img
            onClick={HandleTurnVolume}
            height="16px"
            src={state.volume ? '/logos/volume-turn-on.svg' : '/logos/volume-turn-off.svg'}
            alt="volume"
          />
        </div>
      </div>
    </>
  );
};

export default Video;
