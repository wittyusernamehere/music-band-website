import React from 'react';
import styles from './Biography.style.css';

function Biography() {
  return (
    <div className={styles.borders}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam id mollis nulla. Ut varius ligula est, ornare volutpat
        odio condimentum a. Cras rutrum ipsum justo, non congue ligula
        tincidunt eget. Proin nunc metus, euismod id vulputate a,
        aliquet et quam. Aliquam erat volutpat. Phasellus placerat eu
        erat ut rhoncus. Nulla facilisi. Maecenas convallis ex neque,
        id ultricies diam elementum non.{' '}
      </p>
      <p>
        Nam tristique sapien a dictum tincidunt. Proin elit ligula,
        euismod eu hendrerit in, interdum non erat. Fusce maximus
        ultricies augue, nec consectetur est finibus vitae. Mauris
        gravida non dui a ornare. Phasellus nulla odio, rutrum in mi
        in, tempor posuere nibh. Sed fermentum accumsan lectus,
        laoreet scelerisque diam bibendum ut. Aliquam lacinia cursus
        eros sit amet rhoncus. Etiam nec finibus risus. In hac
        habitasse platea dictumst.{' '}
      </p>
      <p>
        Integer diam ipsum, iaculis in est ac, pulvinar congue nunc.
        Curabitur et ultricies tellus. Suspendisse efficitur sem sit
        amet lectus sagittis vehicula. In et odio eros. Nam facilisis
        sollicitudin aliquet. Vestibulum fermentum velit ut leo
        finibus, ac imperdiet enim aliquet. Aenean vel tempus lorem.
        Nullam in placerat diam. Donec pulvinar dolor sit amet libero
        fringilla, ornare malesuada mauris tempus. Donec suscipit,
        diam non interdum vehicula, nibh lacus luctus nunc, nec
        sodales mauris tellus in massa. Curabitur lacus libero,
        placerat semper blandit ac, maximus et sapien.{' '}
      </p>
    </div>
  );
}

export default Biography;
