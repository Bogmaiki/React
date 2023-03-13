import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect, useState } from 'react'; 

function App() {
  const [number, setNumber] = useState(0);
   useEffect(() => {
     const intervalId = setInterval(() => {
        setNumber(prev =>
           prev < 100 ? prev + 1 : clearInterval(intervalId) && 100);
      }, 100);
    }, []);
    return <>
    <ProgressBar now={number} />
    </>;
} 

export default App;