import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./Utils/Routes";

import ItemBoardPage from "./pages/ItemBoardPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemListPage from "./pages/ItemListPage";
import ItemMyPage from "./pages/ItemMyPage";
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
import ItemSmallCard from "./components/ItemSmallCard";

const Mainboard = () =>{

  return (
    <Switch>
        <PrivateRoute exact path="/messageboardpage" component={MessageBoardPage} />
        <PrivateRoute exact path="/messagepage" component={MessagePage} />
        <PrivateRoute exact path="/postagentpage" component={PostAgentPage} />
        <PrivateRoute exact path="/postrepage" component={PostREPage} />
        <PrivateRoute exact path="/favouritepage" component={FavouritePage} />
        <PrivateRoute exact path="/itemmypage" component={ItemMyPage} />
        <PrivateRoute exact path="/querybulletinpage" component={QueryBulletinPage} />
        <PrivateRoute exact path="/querygeneralpage" component={QueryGeneralPage} />

        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/itemboardpage" component={ItemBoardPage} />
        <Route exact path="/itemlistpage" component={ItemListPage} />
        <Route exact path="/itemdetailpage" component={ItemDetailPage} />
        <Route exact path="/faqpage" component={FAQPage} />
        <Route exact path="/feedbackboardpage" component={FeedbackBoardPage} />
        <Route exact path="/feedbackpage" component={FeedbackPage} />
        <Route exact path="/signinpage" component={SignInPage} />
        <Route exact path="/signuppage" component={SignUpPage} />
        <Route exact path="/basictable" component={ItemSmallCard} />
    </Switch>  
  );
}

export default Mainboard;
