import React from 'react';
import { UserContext } from '../../../../Context/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { isLoggedIn } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.isSingle ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {isLoggedIn && (
        <PhotoCommentsForm id={props.id} setComments={setComments} isSingle={props.isSingle} />
      )}
    </>
  );
};

export default PhotoComments;
