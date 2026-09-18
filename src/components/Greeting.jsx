import { useState } from 'preact/hooks';
import styles from './Greeting.module.css';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h2>{greeting}! Thank you for visiting!</h2>
      <button className={styles.button} onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}