import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { 
    id: 1, 
    title: 'Exploring the World of Machine Learning', 
    content: 'In this post, we delve into the fascinating world of machine learning algorithms and their applications in various industries. From image recognition to natural language processing, machine learning is revolutionizing how we interact with technology.', 
    imageUrl: 'https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=2048x2048&w=is&k=20&c=95BgS0lojrWD3QEmbec0nJv2DOHvUO4G6QoXF80S_9Y=' 
  },
  { 
    id: 2, 
    title: 'The Art of Modern Photography', 
    content: 'Discover the artistry and techniques behind modern photography in this insightful post. From capturing breathtaking landscapes to experimenting with abstract compositions, photography continues to evolve as a powerful form of visual storytelling.', 
    imageUrl: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 3, 
    title: 'The Rise of AI in Healthcare', 
    content: 'AI is transforming healthcare by improving diagnostics, personalized medicine, and patient care. This post explores the latest advancements and ethical considerations in the integration of artificial intelligence in the medical field.', 
    imageUrl: 'https://media.istockphoto.com/id/1300745916/photo/medical-technology-concept-remote-medicine-electronic-medical-record.jpg?s=2048x2048&w=is&k=20&c=bSdeaej9-qojEulS_XMI8Q4ivZyi-zHEy9ZHnt5_-zA=' 
  },
  { 
    id: 4, 
    title: 'Future of Renewable Energy Technologies', 
    content: 'Renewable energy technologies like solar, wind, and hydroelectric power are key to a sustainable future. This post discusses innovations in renewable energy and their potential to mitigate climate change and ensure energy security.', 
    imageUrl: 'https://media.istockphoto.com/id/1354157284/photo/male-engineers-walking-along-rows-of-photovoltaic-panels.jpg?s=2048x2048&w=is&k=20&c=5jYOcAeiBs-GiKwO_iLAWcZ4ab0-B13_vXFd2cQncCc=' 
  },
  { 
    id: 5, 
    title: 'Exploring Virtual Reality Applications', 
    content: 'Virtual reality (VR) is reshaping industries such as gaming, education, and healthcare. Dive into this post to learn about VR applications, immersive experiences, and the future possibilities of virtual environments.', 
    imageUrl: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=1080&fit=max' 
  },
];


const PostDetailsPage = () => {
  const { id } = useParams();

 
  const post = posts.find(post => post.id === parseInt(id));

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <img src={post.imageUrl} alt={post.title} style={{ maxWidth: '30%', height: 'auto' }} />
          <p>{post.content}</p>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
}

export default PostDetailsPage;
