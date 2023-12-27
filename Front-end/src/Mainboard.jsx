import { Switch, Route, Routes } from "react-router-dom";

import BulletinBoardPage from "./pages/BulletinBoardPage";
import BulletinMinePage from "./pages/BulletinMyPage";
import BulletinPage from "./pages/BulletinPage";
import BulletinSelectPage from "./pages/BulletinSelectPage";
import DashboardPage from "./pages/DashboardPage";
import FAQPage from "./pages/FAQPage";
import FavouritePage from "./pages/FavouritePage";
import FeedbackBoardPage from "./pages/FeedbackBoardPage";
import FeedbackPage from "./pages/FeedbackPage";
import MessageBoardPage from "./pages/MessageBoardPage";
import MessagePage from "./pages/MessagePage";
import PostAgentPage from "./pages/PostAgentPage";
import PostREPage from "./pages/PostREPage";
import QueryBulletinPage from "./pages/QueryBulletinPage";
import QueryGeneralPage from "./pages/QueryGeneralPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {

  return (
    <Switch>
      <Routes>
        <PrivateRoute path="/messageboardpage" element={<MessageBoardPage />} />
        <PrivateRoute path="/messagepage" element={<MessagePage />} />
        <PrivateRoute path="/postagentpage" element={<PostAgentPage />} />
        <PrivateRoute path="/postrepage" element={<PostREPage />} />
        <PrivateRoute path="/favouritepage" element={<FavouritePage />} />
        <PrivateRoute path="/bulletinmypage" element={<BulletinMinePage />} />
        <PrivateRoute path="/querybulletinpage" element={<QueryBulletinPage />} />
        <PrivateRoute path="/querygeneralpage" element={<QueryGeneralPage />} />

        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/bulletinselectpage" element={<BulletinSelectPage />} />
        <Route path="/bulletinboardpage" element={<BulletinBoardPage />} />
        <Route path="/bulletinpage" element={<BulletinPage />} />
        <Route path="/faqpage" element={<FAQPage />} />
        <Route path="/feedbackboardpage" element={<FeedbackBoardPage />} />
        <Route path="/feedbackpage" element={<FeedbackPage />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
      </Routes>
    </Switch>  
  );
}

export default App;
