import React from 'react';
import styles from './Contact.style.css';

function Contact() {
  return (
    <div className={styles.borders}>
      <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
      <br />

      <form action="https://formspree.io/myybzzyp" method="POST">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className={styles.nameinput}
        />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
          required
          className={styles.emailinput}
        />

        <textarea
          id="message"
          name="message"
          cols="30"
          rows="5"
          placeholder="Message"
          required
          className={styles.messageinput}
        ></textarea>

        <button type="submit" className={styles.submitbtn}>
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
