import { Layout } from 'antd';
import './App.css';
import Header from './component/header';
import Landing from './component/pages/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/footer';
import RecipePage from './component/pages/detail/detail';
import BlogPostGrid from './component/pages/BlogsPage/allBlogs';
import RecipeUpload from './component/pages/upload/upload';
import ConfirmationPage from './component/pages/userAccount';
import SignInForm from './component/pages/signIn';
import PerfectRecipe from './component/pages/perfectRecipe';
import BlogPage from './component/pages/blogPage';
import RecipeFromDb from './component/pages/dataFromDb';
import AboutSection from './component/pages/about';

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <Layout.Content style={{ flex: '1' }}>
          <Routes>
            
            <Route path="/" element={<Landing />} />
            <Route path="/detail/:id" element={<RecipePage />} /> {/* Updated this line */}
            <Route path="/allBlogs/:id" element={<BlogPostGrid />} /> {/* Updated this line */}
            <Route path="/upload" element={<RecipeUpload />} /> {/* Updated this line */}
            <Route path="/signIn" element={<SignInForm />} /> {/* Updated this line */}
            <Route path="/userAccount" element={<ConfirmationPage />} /> {/* Updated this line */}
            <Route path="/perfectRecipe" element={<PerfectRecipe />} /> {/* Updated this line */}
            <Route path="/blogPage" element={<BlogPage />} /> {/* Updated this line */}
            <Route path="/dataFromDb" element={<RecipeFromDb />} /> {/* Updated this line */}
            <Route path="/about" element={<AboutSection />} /> {/* Updated this line */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Layout.Content>
        
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;

