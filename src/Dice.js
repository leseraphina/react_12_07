import DicRed01 from './assets/red_1.svg';
import DicRed02 from './assets/red_2.svg';
import DicRed03 from './assets/red_3.svg';
import DicRed04 from './assets/red_4.svg';
import DicRed05 from './assets/red_5.svg';
import DicRed06 from './assets/red_6.svg';
import DicBlue01 from './assets/blue-1.svg';
import DicBlue02 from './assets/blue-2.svg';
import DicBlue03 from './assets/blue-3.svg';
import DicBlue04 from './assets/blue-4.svg';
import DicBlue05 from './assets/blue-5.svg';
import DicBlue06 from './assets/blue-6.svg';
 const DicNum = {
   blue:[DicBlue01, DicBlue02, DicBlue03, DicBlue04, DicBlue05, DicBlue06],
   red:[DicRed01, DicRed02, DicRed03, DicRed04, DicRed05, DicRed06]}
function Dice({color='blue',num=1}){
  const src = DicNum[color][num-1];
  const alt = `${color}${num}`
  return (
    <img src={src} alt={alt} />
  )
}
export default Dice;