import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function PostsRequests ()
 {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get('http://localhost:5000/postsRequest')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccept = (post_id) => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to accept this post?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Accept',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) 
      {
        axios.put(`http://localhost:5000/postsAccept/${post_id}`)
          .then((response) => {
            fetchPosts(); 
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleReject = (post_id) => {
    Swal.fire({
      title: 'Rejection Reason',
      input: 'text',
      inputPlaceholder: 'Enter rejection reason...',
      showCancelButton: true,
      confirmButtonText: 'Reject',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const reason = result.value;
        axios
          .put(`http://localhost:5000/postsReject/${post_id}`, { reason })
          .then((response) => {
            fetchPosts(); 
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };



  return (
    <div>
      {posts.length === 0 ? (
        <p style={{ marginTop: '200px', textAlign: 'center' }}>
          No post requests available
        </p>
      ) : (
        posts.map((post) => (
          <div
            key={post.post_id}
            className="bg-white rounded-lg shadow-md p-4 mb-4 mt-5 ms-5 hover:shadow-lg transition-shadow duration-300"
            style={{ width: '355px' }}
          >
            <div className="flex items-center mb-4">
              <img
                src={post.profileImage}
                alt="Profile"
                className="w-8 h-8 rounded-full mr-3"
              />
              <span className="text-gray-800 font-bold">{post.username}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex justify-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleAccept(post.post_id)}
              >
                Accept
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => handleReject(post.post_id)}
              >
                Deny
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PostsRequests;
