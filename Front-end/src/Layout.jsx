import { Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./Utils/Routes";

import ItemBoardPage from "./pages/ItemBoardPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemListPage from "./pages/ItemListPage";
import ItemMyPage from "./pages/ItemMyPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import FAQPage from "./pages/FAQPage";
import FavouritePage from "./pages/FavouritePage";
import FeedbackBoardPage from "./pages/FeedbackBoardPage";
import FeedbackDetailPage from "./pages/FeedbackDetailPage";
import MessageBoardPage from "./pages/MessageBoardPage";
import MessageDetailPage from "./pages/MessageDetailPage";
import PostAgentPage from "./pages/PostAgentPage";
import PostREPage from "./pages/PostREPage";
import ContactPostPage from "./pages/ContactPostPage";
import ContactGeneralPage from "./pages/ContactGeneralPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AdminApproveRealEstateList from "./pages/AdminApproveRealEstateList";
import AdminApproveRealEstateDetail from "./pages/AdminApproveRealEstateDetail";
import AdminViewAgentPage from "./pages/AdminViewAgentPage";
import AdminContactAgentPage from "./pages/AdminContactaAgentPage";
import InputVerificationCodePage from "./pages/InputVerificationCodePage";
import FeedbackPage from "./pages/FeedbackPage";
import NotFoundPages from "./pages/404pages";
import { useCookies } from "react-cookie";

const Layout = () => {

  const [cookies, setCookie] = useCookies();
  const token = cookies.token;

  return (
    <Switch>
        <PrivateRoute exact path="/message-board" component={MessageBoardPage} />
        <PrivateRoute exact path="/message-detail" component={MessageDetailPage} />
        <PrivateRoute exact path="/post-agent" component={PostAgentPage} />
        <PrivateRoute exact path="/post-realestate" component={PostREPage} />
        <PrivateRoute exact path="/favourite" component={FavouritePage} />
        <PrivateRoute exact path="/my-post" component={ItemMyPage} />
        <PrivateRoute exact path="/contact-post" component={ContactPostPage} />
        <PrivateRoute exact path="/contact-general" component={ContactGeneralPage} />

        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/item-board" component={ItemBoardPage} />
        <Route exact path="/item-list" component={ItemListPage} />
        <Route exact path="/item-detail" component={ItemDetailPage} />
        <Route exact path="/faq" component={FAQPage} />
        <Route exact path="/feedback-board" component={FeedbackBoardPage} />
        <Route exact path="/feedback-detail" component={FeedbackDetailPage} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/register" component={SignUpPage} />
        <Route exact path="/input-code" component={InputVerificationCodePage} />
        <Route exact path="/feedback" component={FeedbackPage} />
      
        <Route exact path="/admin-approve-realestate-list" component={AdminApproveRealEstateList} />
        <Route exact path="/admin-approve-realestate-detail" component={AdminApproveRealEstateDetail} />
        <Route exact path="/admin-view-agent" component={AdminViewAgentPage} />
        <Route exact path="/admin-contact-agent" component={AdminContactAgentPage} />
        
        <Route exact path="*" component={NotFoundPages} />


        
    </Switch>  
  );
}

export default Layout;
