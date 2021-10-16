
import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';

const initializationAuthentic=()=>{
    return initializeApp(firebaseConfig);
}
export default initializationAuthentic;