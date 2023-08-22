import styles from './styles.module.css'
import Image from 'next/image'
import NAV_CONTROLS from '@/ui/configurations/navigation'
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react'
import Link from 'next/link';
import {EmailShareButton,WhatsappIcon
    ,WhatsappShareButton,EmailIcon,
    LinkedinShareButton,LinkedinIcon
} from 'react-share'
const AnimatedListItem = ({ item, isLeft }) => {
    const initial = isLeft ? { x: -100, opacity: 0 } : { x: 60, opacity: 0 };
    const animate = { x: 0, opacity: 1 };
    const exit = isLeft ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 };

    const {push,asPath}=useRouter()
  
    return (
      <motion.li
        initial={asPath!=='/'?'none':initial}
        animate={asPath!=='/'?'none':animate}
        exit={exit}
        transition={{ duration: 1.2 }}
        className={`${styles.text} ${asPath===item.url&&styles.ani}`  }
        style={{ listStyleType: 'none' }}
        // onClick={()=>push(item.url)}
      >
        <Link href={item.url}>
        {item?.title}
        </Link>
      </motion.li>
    );
  };
  
const shareUrl = 'https://www.pakkamarwadi.tk/';

const Header=()=>{

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % NAV_CONTROLS.length);
      }, 2000); 
  
    return () => clearInterval(interval);
    }, [NAV_CONTROLS.length]);

    return <div className={styles.container}>
        
        <img
            className={styles.img}
            src='https://media.licdn.com/dms/image/D4D03AQEpFQNDxc3OTQ/profile-displayphoto-shrink_800_800/0/1670056349127?e=1698278400&v=beta&t=wKZtZ3FXBugDS79ESBPmiBgT5quIRHI0IZgv3k9wsF0'
            alt='log'
            width={200}
            height={200}
            />
    <div className={styles.name}>Vikash Patidar</div>
    <div className={styles.nav_box}>

    <AnimatePresence>
        {NAV_CONTROLS.map((item,index)=>{
            return <AnimatedListItem key={index} item={item}  isLeft={index % 2 === 0} /> 
        })}
    </AnimatePresence>
    </div>
    <div className={styles.footer}>
        <div className={styles.footer_box}>
        <EmailShareButton url={shareUrl} quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}>
            <EmailIcon size={20} round={true} />
        </EmailShareButton>
        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={20} round={true} />
        </WhatsappShareButton>
        <LinkedinShareButton url={'https://www.linkedin.com/in/vikas-patidar-566234205/'}>
        <LinkedinIcon size={20} round={true} />
        </LinkedinShareButton>
        </div>
    </div>
    </div>
}
export default Header


{/* <div className={styles.text}>{item.title}</div> */}