import {FaHome, FaUser, FaRunning, FaBriefcase} from 'react-icons/fa';

// 카테고리 정의
export const CATEGORIES = [
  {id:'general', name:'일반', icon: <FaHome/>},
  {id:'work', name:'업무', icon: <FaBriefcase/>},
  {id:'exercise', name:'운동', icon: <FaRunning/>},
  {id:'personal', name:'개인', icon: <FaUser/>}
];