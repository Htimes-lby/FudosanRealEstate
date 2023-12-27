import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./Utils/Routes";

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

const Mainboard = () =>{

  return (
    <Switch>
        <PrivateRoute exact path="/messageboardpage" component={<MessageBoardPage />} />
        <PrivateRoute exact path="/messagepage" component={<MessagePage />} />
        <PrivateRoute exact path="/postagentpage" component={<PostAgentPage />} />
        <PrivateRoute exact path="/postrepage" component={<PostREPage />} />
        <PrivateRoute exact path="/favouritepage" component={<FavouritePage />} />
        <PrivateRoute exact path="/bulletinmypage" component={<BulletinMinePage />} />
        <PrivateRoute exact path="/querybulletinpage" component={<QueryBulletinPage />} />
        <PrivateRoute exact path="/querygeneralpage" component={<QueryGeneralPage />} />

        <Route exact path="/" component={<DashboardPage />} />
        <Route exact path="/dashboard" component={<DashboardPage />} />
        <Route exact path="/bulletinselectpage" component={<BulletinSelectPage />} />
        <Route exact path="/bulletinboardpage" component={<BulletinBoardPage />} />
        <Route exact path="/bulletinpage" component={<BulletinPage />} />
        <Route exact path="/faqpage" component={<FAQPage />} />
        <Route exact path="/feedbackboardpage" component={<FeedbackBoardPage />} />
        <Route exact path="/feedbackpage" component={<FeedbackPage />} />
        <Route exact path="/signinpage" component={<SignInPage />} />
        <Route exact path="/signuppage" component={<SignUpPage />} />
    </Switch>  
  );
}

export default Mainboard;
