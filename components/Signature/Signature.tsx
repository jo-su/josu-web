import styles from './Signature.module.scss'

const Signature = () => {
    return (
      <div className={styles.signature}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" cursor="default">
          <line className={styles.stroke_marra} y1="118px" x1="111.5px" y2="150px" x2="114.5px"/>
          <path className={styles.stroke_josu} d="M25,211.5 C30.5,206.5 108.5,159 128.5,175.5 C148.5,192.5 190.5,251 164.5,276.5 C138.5,302 125.5,245 156,206.5 C186.5,168 183.5,179 189.5,182 C195.5,185 211.5,225 231,220 C250.5,215 260.5,188 252,173.5 C243.5,159 222.5,142.5 191,175.5 C159.5,208.5 242,173.5 251,173.5 C260.5,173.5 291,170.5 296.5,195 C302,219.5 286,230 281.5,217.5 C277,205 325,159.5 329,160.5 C333,161.5 342,211 359,205.5 C376,200 390.5,162 392.5,163.5 C394.5,165 396.5,187.5 404.5,203 C412.5,218.5 426.5,214 440,210.5"/>
          <line className={styles.stroke_puntua} y1="212px" x1="460px" y2="211px" x2="463px" />
        </svg>
      </div>
    );
  };
  
export default Signature;