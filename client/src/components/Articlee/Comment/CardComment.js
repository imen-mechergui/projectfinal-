import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DeleteComment } from '../../../js/actions/authActions';
import {useDispatch} from 'react-redux'

const CommentItem = ({
  comment: {_id, comment},articleID
 
}) => {
const dispatch = useDispatch()
const deleteComment =()=>{
  dispatch(DeleteComment(articleID,_id))
}
return (
    <Fragment>
      <div class="post  p-1 my-1">
       
        <div>
          <p class="my-1">{comment}</p>
                    
            <button
            onClick ={deleteComment}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
          
        </div>
      </div>
    </Fragment>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  DeleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { DeleteComment })(CommentItem); 